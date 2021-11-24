player.onChat("load3", function () {
    CopyTo(world(156, 4, -132), world(173, 128, -121), world(117, 4, 28))
})
player.onChat("save1", function () {
    CopyTo(world(117, 4, 28), world(134, 128, 39), world(156, 4, -102))
})
player.onChat("save3", function () {
    CopyTo(world(117, 4, 28), world(134, 128, 39), world(156, 4, -132))
})
function CopyTo (position: Position, position2: Position, position3: Position) {
    builder.teleportTo(position)
    builder.mark()
    builder.teleportTo(position2)
    builder.copy()
    builder.teleportTo(position3)
    builder.paste()
}
player.onChat("load2", function () {
    CopyTo(world(156, 4, -117), world(173, 128, -106), world(117, 4, 28))
})
player.onChat("save2", function () {
    CopyTo(world(117, 4, 28), world(134, 128, 39), world(156, 4, -117))
})
player.onChat("load1", function () {
    CopyTo(world(156, 4, -102), world(173, 128, -91), world(117, 4, 28))
})
