function throwBalls (numBalls: number) {
    for (let index = 0; index <= numBalls; index++) {
        projectile = sprites.createProjectileFromSprite(img`
            . . 6 6 6 6 . . 
            . 6 d 4 4 4 6 . 
            6 1 b 1 1 4 d 6 
            c 1 b b 4 4 1 c 
            . c b b b d c . 
            . . c c c c . . 
            `, mySprite, 50, 50)
        pause(500)
        game.splash(index + 1)
    }
}
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 e . . . . 
    . . . . . 2 2 2 2 d 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 2 2 e . . . 
    . . . . e 2 2 2 2 2 e f f c c . 
    . . . . e e 2 2 e f f f f b c . 
    . . . e e e f e 2 b f f f d c . 
    . . e e 2 2 d f 2 1 1 1 1 b c . 
    . . e e 2 2 d f e e c c c . . . 
    . . b 1 1 d e 2 e e c . . . . . 
    . . f f f f d d f . . . . . . . 
    f f f f f f d d . . . . . . . . 
    f f f . f f f e . . . . . . . . 
    f f . . . . e e e . . . . . . . 
    . . . . . . e e e e . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(20, 56)
let userInputNum = game.askForNumber("Please enter a number. ", 1)
throwBalls(userInputNum)
