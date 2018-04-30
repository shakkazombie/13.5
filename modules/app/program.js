var os = require('../modules/OSinfo');
var time = require('../modules/time');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'exit':
                process.stdout.write('wyjscie z apki!\n');
                process.exit();
                break;
            case 'version':
                console.log(process.version);
                break;
            case 'env':
                console.log(process.env);
                break;
            case 'monkey':
                process.stdout.write('m. o_O .m  \n');
                break;
            case 'os':
                os.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }

    }
});