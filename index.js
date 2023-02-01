// console.log('Hai, arkademy!')

// const kata = "malam"
// let reverse = ""
// let i = kata.length - 1

// for(i; i>=0; i--){
//     reverse += kata[i]
//     if(i === 0){
//         if(kata===reverse){
//             console.log("palindrom")
//         }
//         else{
//             console.log("bukan palindrom")
//         }
//     }
// }

// while(i>=0){
//     reverse += kata[i]

//     if(i === 0){
//         if(kata===reverse){
//             console.log("palindrom")
//         }
//         else{
//             console.log("bukan palindrom")
//         }
//     }
//     i--
// }

const kalimat = "mencoba reverse word dengan kalimat saya suka javascript"
const arr = []
let count = 0
let temporary = ""

for(let i=0; i<=kalimat.length; i++){
    if(kalimat[i] === " " || i >= kalimat.length){
        arr[count] = temporary
        temporary = ""
        count++
        if(i>=kalimat.length){
            let result=""
            for(let j=arr.length-1; j>=0; j--){
                result += arr[j]
                if(j!==0){
                    result+=" "
                }
                else{
                    console.log(result)
                }
            }
        }
    }
    else{
        temporary += kalimat[i]
    }
}