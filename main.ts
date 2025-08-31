sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    let projectile: Sprite = null
    let mySprite: Sprite = null
    sprites.destroy(mySprite)
    sprites.destroy(projectile)
})
