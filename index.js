let coordinates1 = [
    {x: 0, y: 0},
    {x: 49, y: 83.75},
    {x: 145, y: 83.75},
    {x: 192, y: 0},
    {x: 288, y: 0},
    {x: 337, y: 83.75},
    {x: 384, y: 167.5},
    {x: 480, y: 167.5},
    {x: 529, y: 83.75},
    {x: 625, y: 83.75},
    {x: 672, y: 167.5},
    {x: 721, y: 251.25},
    {x: 768, y: 335},
    {x: 721, y: 418.75},
    {x: 625, y: 418.75},
    {x: 576, y: 335},
    {x: 480, y: 335},
    {x: 433, y: 418.75},
    {x: 337, y: 418.75},
    {x: 288, y: 335},
    {x: 241, y: 251.25},
    {x: 145, y: 251.25},
    {x: 49, y: 251.25},
    {x: 0, y: 335},
    {x: 49, y: 418.75},
    {x: 96, y: 502.5}
];

let coordinates2 = [
    {x: 0, y: 0},
    {x: 49, y: 83.75},
    {x: 245, y: 83.75},
    {x: 392, y: 0},
    {x: 288, y: 0},
    {x: 337, y: 83.75},
    {x: 384, y: 167.5},
    {x: 480, y: 167.5},
    {x: 529, y: 83.75},
    {x: 625, y: 83.75},
    {x: 672, y: 167.5},
    {x: 721, y: 251.25},
    {x: 768, y: 335},
    {x: 721, y: 418.75},
    {x: 625, y: 418.75},
    {x: 1176, y: 335},
    {x: 480, y: 335},
    {x: 433, y: 418.75},
    {x: 337, y: 418.75},
    {x: 288, y: 335},
    {x: 2241, y: 251.25},
    {x: 145, y: 251.25},
    {x: 459, y: 251.25},
    {x: 0, y: 335},
    {x: 49, y: 418.75},
    {x: 96, y: 502.5}
];

let random = Math.floor(Math.random * 2);
let coordinates = [...coordinates1];

// if(random === 0) {
//     let coordinates[...coordinates1];
// }else {
//     let coordinates[...coordinates2];
// }

//every refresh must display random maps
console.log(coordinates);

$(document).ready(function(){
    //
    let html_template = ``;

    html_template += `<li class="lesson_chip active" style="transform: translate(${coordinates[0].x}px, ${coordinates[0].y}px);">`;
    html_template += `<a href="#"><div class="forum_icon active"></div><i class="far fa-star"></i></a>`;
    html_template += `</li>`;
    
    for(let coordinate_index = 1; coordinate_index < coordinates.length-1; coordinate_index++){
        html_template += `<li class="challenge_chip" style="transform: translate(${coordinates[coordinate_index].x}px, ${coordinates[coordinate_index].y}px);">`;
        html_template +=   `<a href="#"><span class="challenge_chip_number">x: ${coordinates[coordinate_index].x}, y: ${coordinates[coordinate_index].y}</span></a>`
        html_template += `</li>`; 
    }


    html_template += `<li class="lesson_chip" style="transform: translate(${coordinates[coordinates.length-1].x}px, ${coordinates[coordinates.length-1].y }px);">`;
    html_template += `<a href="#"><div class="forum_icon"></div><i class="far fa-star"></i></a>`;
    html_template += `</li>`;

    $("ul").html(html_template);

});
