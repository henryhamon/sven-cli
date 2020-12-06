const beautify = require('js-beautify').js,
    fs = require('fs');

fs.readFile('foo.js', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(beautify(data, { indent_size: 2, space_in_empty_paren: true }));
});

export function build(){

}
