const puppeteer = require("puppeteer")
let url = "https://internshala.com/chat/c-0";

const load = async(url) =>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage();
    await page.goto(url);
   const  inputfield = await page.$("#email");
   await inputfield.type("##############")
   const  input = await page.$("#password");
   await input.type("###########")
   const  enter = await page.$("#login_submit");
    await enter.click()
    await page.waitForSelector("#chat_group")

    const data = await page.evaluate(()=>{
        console.log("hello")
        const searchurl = document.querySelectorAll(".chat_list_item")
        // console.log(searchurl)
        const temp = []
        searchurl.forEach(item=>{
            let linkurl = {
                href:item.querySelector(" span a").href
            }
            
            temp.push(linkurl)
        })
        return temp
    })


    console.log(data)
    
    
    //const writetext = await page.evaluate(async()=>{

        // await newpage.goto("https://internshala.com/chat/c-41064316?filter=all");

        // data.forEach(async(url)=>{
           
        //     await newpage.goto(url.href);

        // })
   // })

   
   let newtab = await browser.newPage();
   await newtab.goto("https://internshala.com/chat/c-41064316?filter=all");
   await newtab.waitForSelector("#message_input")
const  inputfiel = await newtab.$("#message_input");
    await inputfiel.type("thanks for giving me this opportunity")





//    data.forEach(async (item)=>{
//     let newtab = await browser.newPage();
//     await newtab.goto(item.href);
//     await newtab.waitForSelector("#chat_group")
//     const writeText = await newtab.evaluate(async()=>{
        
//         const  inputfield = await newtab.$("#message_input");
//         await inputfield.type("thanks for giving me this opportunity")

//    })
// })
   
  
    // const writetext = async()=>{
    //     const newtab = await browser.newPage();
    //     await newtab.goto("https://internshala.com/chat/c-41064316?filter=all");
    // }

    // await browser.close();

    
}

load(url)
