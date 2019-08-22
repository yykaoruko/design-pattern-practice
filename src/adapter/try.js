var fs = require('fs');
var path = require('path');
var FileProperties = /** @class */ (function () {
    function FileProperties() {
        this._data = {};
    }
    FileProperties.prototype.readFromFile = function (filepath) {
        var resolvePath = path.resolve(__dirname, filepath);
        var txt = fs.readFileSync(resolvePath, 'utf8');
        this._splitString(txt);
    };
    FileProperties.prototype._splitString = function (str) {
        var _this = this;
        var strs = str.split(/\n/);
        strs.forEach(function (value) {
            var data = value.split('=');
            _this._data[data[0]] = data[1];
        });
    };
    FileProperties.prototype.writeToFile = function (filepath) {
        var data = '';
        for (var key in this._data) {
            data += key + "=" + this._data[key] + "\n";
        }
        var date = new Date();
        var txt = "# writen by FileProperties\n# " + date + "\n" + data;
        var resolvePath = path.resolve(__dirname, filepath);
        fs.writeFile(resolvePath, txt, function (err) {
            if (err) {
                throw err;
            }
        });
    };
    FileProperties.prototype.setValue = function (key, value) {
        this._data[key] = value;
    };
    FileProperties.prototype.getValue = function (key) {
        return this._data[key];
    };
    return FileProperties;
}());
var main = function () {
    var file = new FileProperties();
    file.readFromFile('file.txt');
    file.setValue('name', 'ruko');
    file.writeToFile('./filenew.txt');
};
main();
