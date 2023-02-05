namespace SpriteKind {
    export const obstacle = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2 = sprites.create(img`
        .............cc.
        ............cbbc
        ............cbbc
        ...........bdcc.
        ...........bdbb.
        ..........bddc..
        ..........bdbb..
        .........bddc...
        .........bdbb...
        ........bddc....
        ........bdbb....
        .......bddc.....
        .......bdbb.....
        ......bddc......
        ......bdbb......
        .....bddc.......
        .....bdbb.......
        ....bddc........
        ....bdbb........
        ...bddc.........
        ...bdbb.........
        ..bddc..........
        ..bdbb..........
        .bddc...........
        .bdbb...........
        b1dc............
        b11c............
        b11c............
        b11c.........cc.
        b11c........cbbc
        b11c........cbbc
        b11c.......bdcc.
        b11c.......bdbb.
        b11c......bddc..
        b11bccc...bdbb..
        b11bbbbcccddc...
        b11bcccbccdbb...
        b11b..ccbddc....
        b11b...ccdbbc...
        b11b...bddcbc...
        b11b...bdbbcbc..
        b11b..bddc.fbc..
        b11b..bdbb.fbf..
        b11b.bddc..fcf..
        b11b.bdbb..fcf..
        b11bbddc...fcf..
        b11bbdbb...fcf..
        b11bddc...cfcfc.
        b11ddbb..cbfcfbc
        b1dddc...cdfffdc
        b1ddbb...cdcfcdc
        cdddc....cbdddbc
        cddbb....cbbbbbc
        cddc.....cbbbbbc
        cdbb.....cbbbbbc
        .cc......cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........cbbbbbc
        .........8bbbbb8
        .........8bbbbb8
        .........6bbbbb6
        ..........6bbb6.
        ...........666..
        `, SpriteKind.Food)
    mySprite2.setPosition(139, 57)
})
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    ........................
    ........................
    .......ff...............
    .....ff22ff.............
    ...fff2222fff...........
    ..fff222222fff..........
    ..fff222222fff..........
    ..feeeeeeeeeeff.........
    .ffe22222222eff.........
    .fffffeeeefffff.........
    fdfefbf44fbfeff.........
    fbfe41fddf14ef..........
    fbffe4dddd4efe..........
    fcfef22222f4e...........
    .ff4f44554f4e...........
    ....ffffffdde...........
    .....ffffedde...........
    ..........ee............
    .........ccc............
    ........cc1cc...........
    .........c1c............
    .........c1c............
    .........c1c............
    .........c1c............
    `, SpriteKind.Player)
