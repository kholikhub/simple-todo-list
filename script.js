var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var AddAPI = /** @class */ (function () {
    // Constructor
    function AddAPI() {
        this.linkTodos = "https://module3-api-is2m.onrender.com/random-todos";
    }
    return AddAPI;
}());
// Method
(function getTodos() {
    return __awaiter(this, void 0, void 0, function () {
        var apiTodo, responseAPI, responseTodos, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    apiTodo = new AddAPI();
                    return [4 /*yield*/, fetch(apiTodo.linkTodos)];
                case 1:
                    responseAPI = _a.sent();
                    return [4 /*yield*/, responseAPI.json()];
                case 2:
                    responseTodos = _a.sent();
                    data = responseTodos;
                    data.forEach(function (todo) {
                        var task = todo.task;
                        var setId = new Numbering().nextId();
                        var bodyTodo = document.getElementById("bodyTodo");
                        var bodyTr = document.createElement("tr");
                        bodyTr.innerHTML = "\n        <td>".concat(setId, "</td>\n        <td>").concat(task, "</td>\n        <td>\n            <button class=\"completeBtn\" type=\"button\">Complete</button>\n            <button class=\"deleteBtn\" type=\"button\">Delete</button>\n        </td>");
                        bodyTodo.appendChild(bodyTr);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error("Error karena: ", err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
})();
var AddTask = /** @class */ (function () {
    function AddTask() {
        this.bodyTodo = null;
        this.bodyTr = null;
        this.inputTask = "";
        this.isCorrect = false;
        this.inputElement = null;
        this.submitTask = null;
    }
    AddTask.prototype.initialize = function () {
        this.submitTask = document.getElementById("addTaskBtn");
        this.bodyTodo = document.getElementById("bodyTodo");
        this.bodyTr = document.createElement("tr");
        this.inputElement = document.getElementById("newTask");
        if (this.inputElement) {
            this.inputTask = this.inputElement.value;
        }
    };
    return AddTask;
}());
var Numbering = /** @class */ (function () {
    function Numbering() {
        this.count = 0;
    }
    Numbering.prototype.nextId = function () {
        return ++this.count;
    };
    return Numbering;
}());
var NewTask = /** @class */ (function () {
    function NewTask(addTask, numbering) {
        this.addTask = addTask;
        this.numbering = numbering;
    }
    NewTask.prototype.addNewTask = function () {
        var _this = this;
        this.addTask.initialize();
        this.addTask.submitTask.addEventListener("click", function () {
            var isCorrect = false;
            try {
                if (!_this.addTask.inputTask.trim()) {
                    throw new Error("Nama Task tidak boleh kosong");
                }
                isCorrect = true;
            }
            catch (err) {
                alert("Perhatian !!! " + err.message);
            }
            finally {
                if (isCorrect) {
                    var bodyTodo = document.getElementById("bodyTodo");
                    var bodyTr = document.createElement("tr");
                    var setId = _this.numbering.nextId();
                    bodyTr.innerHTML = "\n            <td>".concat(setId, "</td>\n            <td>").concat(_this.addTask.inputTask, "</td>\n            <td>\n                <button class=\"completeBtn\" type=\"button\">Complete</button>\n                <button class=\"deleteBtn\" type=\"button\">Delete</button>\n            </td>");
                    bodyTodo.appendChild(bodyTr);
                    _this.addTask.inputElement.value = "";
                }
            }
        });
    };
    return NewTask;
}());
// Event Listener untuk tombol Complete dan Delete
document.addEventListener("click", function (e) {
    var target = e.target;
    if (target.classList.contains("completeBtn")) {
        var row = target.parentElement.parentElement;
        row.style.backgroundColor = "red";
        row.style.color = "white";
    }
    if (target.classList.contains("deleteBtn")) {
        target.parentElement.parentElement.remove();
    }
});
