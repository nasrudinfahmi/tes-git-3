// palindrom

const string = "mamam"
let hasil = ""

for(let i=string.length-1; i>=0; i--){
    hasil+=string[i]
    if(i===0){
        if(string === hasil){
            console.log("Palindrom")
        }
        else{
            console.log("Bukan Palindrom")
        }
    }
    
}



// reverse word

const sentence = "Saya sangat suka belajar JavaScript"
let senLen = sentence.length
let word = ""
const arr = []
let i = 0
let count = 0
for(i; i<= senLen; i++){
    if(sentence[i]===" " || i>=senLen){
        arr[count] = word
        word="" //kenapa sangat berpengaruh? sebelumnya saya belum menuliskan itu dan terjadi undefined berulang
        count++
        if(i >= senLen){
            let result = ""
            for(let j=arr.length-1; j>=0; j--){
                result += arr[j]
                if(j!==0){
                    result += " "
                }
                else{
                    console.log(result)
                }
            }
        }
    }
    else{
        word += sentence[i]
    }
}
        


