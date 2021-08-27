let X = 0
let Y = 0
let 進める数 = 0
input.onButtonPressed(Button.A, function () {
    X = -1
    Y = 0
    進める数 = 5
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 進める数; index++) {
            X += 1
            光らせて一時停止()
        }
        進める数 += -1
        for (let index = 0; index < 進める数; index++) {
            Y += 1
            光らせて一時停止()
        }
        for (let index = 0; index < 進める数; index++) {
            X += -1
            光らせて一時停止()
        }
        進める数 += -1
        for (let index = 0; index < 進める数; index++) {
            Y += -1
            光らせて一時停止()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
function 光らせて一時停止 () {
    led.plot(X, Y)
    basic.pause(200)
}
