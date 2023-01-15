
const request = require("request")

let url = "https://internshala.com/chat/c-0";
// const url = "https://www.flipkart.com/search?q=mobiles";

const cheerio = require("cheerio")

// const getmessangerlink =  (html)=>{
    
//     let $ = cheerio.load(`${html}`, {
//         xml: {
//             xmlMode: true,
//             withStartIndices: true,
//           }
//     });
    
//     // let linkelementarr = $('div#chat_group')
//     // console.log(linkelementarr)
//     // for(let i = 0; i < linkelementarr.length; i++){
//     //     console.log("hello")
//     //     let href = $(linkelementarr[i]).attr("href");
//     //     console.log(href)
//     // }
//     // const data = $('div[id="chat_group"] div.chat_list_item');
//     // console.log(data.children())
//     // console.log("hello");  
//     // $('div.chat_group>div.chat_list_item> div.chat_list_item').each(function(index){
//     //     console.log("hello");  
//     //     const link = $(this).find('div.chat_element>a_1UoZlX>a').attr('href');
//     //     // const name = $(this).find('div._1-2Iqu>div.col-7-12>div._3wU53n').text();
//     //     console.log(link);   //link for smartphone
//     //     // console.log(name);   //name of smartphone
//     //});
//     $('div._1HmYoV > div.col-10-12>div.bhgxx2>div._3O0U0u').each(function(index){
//         const link = $(this).find('div._1UoZlX>a').attr('href');
//         const name = $(this).find('div._1-2Iqu>div.col-7-12>div._3wU53n').text();
//         console.log(link);   //link for smartphone
//         console.log(name);   //name of smartphone
//     });
// }
    
  



// const cb = (err, res, html)=>{

//     if(err){
//         console.log(err);
//     }else{
//         getmessangerlink(html)
//     }
//     // return html
// }
// request(url,cb)



// getmessangerlink();
const fs = require('fs');






request(url, function (err, res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    { console.log("hello")
    fs.writeFile('./test.html', body, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
        // console.log(body)
          //const body = '<div id="chat_group" class="left student_left"><div class="chat_list_item"><div class="side_bar"></div><span class="chat_element_container"><a href="/chat/c-41064316?filter=all" class="chat_element"> </div><div class="chat_list_item"><div class="side_bar"></div><span class="chat_element_container"><a href="/chat/c-41064316?filter=all" class="chat_element"> </div><div class="chat_list_item"><div class="side_bar"></div><span class="chat_element_container"><a href="/chat/c-41064316?filter=all" class="chat_element"> </div><div class="chat_list_item"><div class="side_bar"></div><span class="chat_element_container"><a href="/chat/c-41064316?filter=all" class="chat_element"></div></div>';
         //const body = '<div id="chat_group" class="left student_left"><divclass="chat_list_item"><div class="side_bar"></div><span class="chat_element_container"><a href="/chat/c-41064319?filter=all" class="chat_element"></div> <divclass="chat_list_item"><div class="side_bar"></div><span class="chat_element_container"><a href="/chat/c-41064316?filter=all" class="chat_element"></div></div>';
        let $ = cheerio.load(body);  //loading of complete HTML body // pua html load hi ho raha
      
         $('.chat_element_container>a').each((i,element)=>{
            // console.log("hello")
            console.log($(element).attr('href'))

         })

        
	// 	const pokemons = $('#chat_group .chat_list_item span a') .map((_, pokemon) => { 
    //         const $pokemon = $(pokemon); 
    //         const href = $pokemon.attr("href") 
    //         // const price = $pokemon.find('.woocommerce-Price-amount').text() 
    //         return {'href': href} 
    //     }) 
    //     .toArray(); 
    // console.log(pokemons) 
    }
});

