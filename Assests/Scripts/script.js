window.onload = function () {


    var pasNumber = new Uint8Array(16);

    document.getElementById('field').onmousemove = function () {


        window.crypto.getRandomValues(pasNumber);

        var mega = pasNumber.join("");


        var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 's', 'u', 'v', 'w', 'x', 'y', 'z', '*', '^', '&', '#', '$', '%', '~', '@'];





        function shuffle(alphabet) {
            for (var i = 0; i < alphabet.length - 1; i++) {
                var j = i + Math.floor(Math.random() * (alphabet.length - i));

                var temp = alphabet[j];
                alphabet[j] = alphabet[i];
                alphabet[i] = temp;
            }
            return alphabet;


        }
        // if (alphabet.length > 12) {
        //     alphabet.length = 12;
        // }

        var crypted = Array.prototype.push.apply(alphabet, pasNumber);



        var crypted = alphabet.join("");


        // alphabet.sort(function () {
        //     return 0.5 - Math.random();
        // });


        function makeid(length) {
            var result = '';
            // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charLen = crypted.length;
            for (var i = 0; i < length; i++) {
                result += crypted.charAt(Math.floor(Math.random() * charLen));
            }
            return result;
        }




        document.getElementById('result').innerHTML = makeid(12);


        console.log(crypted);

    }

}


// Button reaction

var code_copy = document.querySelector('#click');
code_copy.addEventListener('click', function (event) {
    // Select the copy 
    var code_data = document.querySelector('#result');
    var range = document.createRange();
    range.selectNode(code_data);
    window.getSelection().addRange(range);

    try {
        // Now that we've selected the anchor text, execute the copy command  
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported  
    window.getSelection().removeAllRanges();


    // "Successfully copied" message


    appear = function () {
        var text = document.getElementById('success');
        if (text.style.display === 'none')
            text.style.display = 'block';
        else {
            text.style.display = 'none';
        }

    }
});





// toggle_visibility = function(id) {