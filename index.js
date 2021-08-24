/* Snake */
let coordinates_1 = [
    {x: 0, y: 0},
    {x: 1, y: 1},
    {x: 3, y: 1},
    {x: 4, y: 0},
    {x: 6, y: 0},
    {x: 7, y: 1},
    {x: 8, y: 2},
    {x: 10, y: 2},
    {x: 11, y: 1},
    {x: 13, y: 1},
    {x: 14, y: 2},
    {x: 15, y: 3},
    {x: 16, y: 4},
    {x: 15, y: 5},
    {x: 13, y: 5},
    {x: 12, y: 4},
    {x: 10, y: 4},
    {x: 9, y: 5},
    {x: 7, y: 5},
    {x: 6, y: 4},
    {x: 5, y: 3},
    {x: 3, y: 3},
    {x: 1, y: 3},
    {x: 0, y: 4},
    {x: 1, y: 5},
    {x: 2, y: 6}
];

/* Star */
let coordinates_2 = [
    {x: 10, y: 0},
    {x: 9, y: 1},
    {x: 11, y: 1},
    {x: 4, y: 2},
    {x: 6, y: 2},
    {x: 8, y: 2},
    {x: 10, y: 2},
    {x: 12, y: 2},
    {x: 14, y: 2},
    {x: 16, y: 2},
    {x: 5, y: 3},
    {x: 7, y: 3},
    {x: 9, y: 3},
    {x: 11, y: 3},
    {x: 13, y: 3},
    {x: 15, y: 3},
    {x: 6, y: 4},
    {x: 8, y: 4},
    {x: 10, y: 4},
    {x: 12, y: 4},
    {x: 14, y: 4},
    {x: 7, y: 5},
    {x: 9, y: 5},
    {x: 11, y: 5},
    {x: 13, y: 5},
    {x: 6, y: 6},
    {x: 8, y: 6},
    {x: 12, y: 6},
    {x: 14, y: 6},
    {x: 5, y: 7},
    {x: 7, y: 7},
    {x: 13, y: 7},
    {x: 15, y: 7}
];

/* V88 */
let coordinates_3 = [
    {x: 0, y: 0},
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3},
    {x: 4, y: 4},
    {x: 5, y: 3},
    {x: 6, y: 2},
    {x: 7, y: 1},
    {x: 8, y: 0},
    {x: 12, y: 0},
    {x: 14, y: 0},
    {x: 11, y: 1},
    {x: 15, y: 1},
    {x: 12, y: 2},
    {x: 14, y: 2},
    {x: 11, y: 3},
    {x: 15, y: 3},
    {x: 12, y: 4},
    {x: 14, y: 4},
    {x: 20, y: 0},
    {x: 22, y: 0},
    {x: 19, y: 1},
    {x: 23, y: 1},
    {x: 20, y: 2},
    {x: 22, y: 2},
    {x: 19, y: 3},
    {x: 23, y: 3},
    {x: 20, y: 4},
    {x: 22, y: 4},
];

$(document).ready(function(){
    let counter = 0;

    $("body").on("click", ".generate", function(){ 
        counter++;
        generateMap(counter);
    });

    counter++;
    generateMap(counter);
});

function generateMap(counter) {
    let random_number = Math.floor(Math.random() * 3);
    let coordinates = [[...coordinates_1], [...coordinates_2], [...coordinates_3]];
    let set_coordinates = coordinates[random_number];
    let map_tiles_template = ``;

    for(let coordinate_index = 0; coordinate_index < set_coordinates.length ; coordinate_index++){
        map_tiles_template += `<li class="challenge_chip" style="transform: translate(${ set_coordinates[coordinate_index].x * 49 }px, ${ set_coordinates[coordinate_index].y * 83.75 }px);">`;
        map_tiles_template +=   `<a href="#"><span class="challenge_chip_number">x: ${ set_coordinates[coordinate_index].x }, y: ${ set_coordinates[coordinate_index].y }</span></a>`
        map_tiles_template += `</li>`; 
    }

    $("ul").html(map_tiles_template);
    
    let append_button = `<button class="generate">Generate ${ counter }</button>`;
    $("body").append(append_button);
}