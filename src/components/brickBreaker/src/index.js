import Game from "./game.js";


export default function BrickGame () {
    
    let canvas = document.getElementById("gameScreen");
    let ctx = canvas.getContext('2d');
    
    const GAME_WIDTH = 800;
    const GAME_HEIGHT = 600;
    
    let game = new Game(GAME_WIDTH, GAME_HEIGHT);
    
    let lastTime = 0; 
    function gameLoop(timestamp) {
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(gameLoop);
    };
    
    requestAnimationFrame(gameLoop);
    
    return (
        <div className="">
            <div className="container w-full mx-auto mt-16">
                <div className="flex flex-wrap items-center justify-center">
                <script type="module" src="src/index.js" defer></script>

                <script type="module" src="./components/brickBreaker/src/index.js" defer></script>
                    <image id="img_ball" src="assets/images/ball.png"></image> 
                    <image id="img_brick" src="assets/images/brick.png"></image>
                    <canvas id="gameScreen" width="800" height="600"></canvas>

                </div>
            </div>
        </div>

    );
};