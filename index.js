function action(type, data) {
    return {
        data: data,
        type: type
    };
}

function extract(actionObj) {
    return actionObj.data;
}

exports.action = action;
exports.extract = extract;
