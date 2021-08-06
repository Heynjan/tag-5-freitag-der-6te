class Main {

    background;
    numOfEnemies = 3;
    numOfHitedEnemies = 0;
    enemies = [];

    constructor() {
        this.init();
    }

    init() {
        this.addBackground();
        this.reset();
    }

    addBackground() {
        this.background = new Background('assets/mohrhuhnhaus5.png');
        let counter = 0;
        setInterval(() => {
            counter++;
            this.background.show();
        },)
    }

    addEnemies() {
        for (let i = 0; i < this.numOfEnemies; i++) {
            this.enemies.push(new Enemy(enemy => {

                    this.hits(enemy);
                },
                'assets/mohrhuhn.png'));
        }
        console.log(this.enemies);
    }

    hits(enemy) {
        this.numOfHitedEnemies++;
        console.count('hit');
        this.hitcount();
        if (this.numOfHitedEnemies === this.numOfEnemies) {//problem ist das numofhited enemies resetten den hitocunter resettet aber so auh nur 2 "wellen" an hühnern erscheinen
            console.log('ich habe fertig')
            this.reset();
        }
        if (this.numOfHitedEnemies === 10) {
            console.log('ich habe fertig')
            this.won();
        }
    }

    pause() {
        this.enemies.forEach(enemy => enemy.stopMove());
    }

    reset() {
        this.numOfHitedEnemies = 0;
        this.enemies.forEach(enemy => enemy.removeFromStage());
        this.enemies = [];
        this.addEnemies();
        this.begin();
    }
    won() {
        clearInterval(this.gameended);
        if (confirm('SUPER willst du nochmal?')) {
            this.begin();
            this.reset();
            this.numOfHitedEnemies = 0;
        }
    }

    gameended = -1;

    begin() {
        clearInterval()
        let count = 0;
        this.gameended = setInterval(() => {
            console.log(count);
            count++

            if (count >= 210) {
                console.log("game ended");
                clearInterval(this.gameended);
                this.gameended = -1;
                this.enemies.forEach(enemy => enemy.removeFromStage());
                if (confirm('Deine Zeit ist vorbei... willst du nochmal?')) {
                    this.reset();
                }
            } else {
                document.getElementById('timer').innerHTML = `<p1>${count} seconds</p1>`;
            }
        }, 1000)
    }
    hitcount() {
        let hitcount = this.numOfHitedEnemies;
        {
            document.getElementById('hitcounter').innerHTML = `<p1>${hitcount} hits</p1>`;
        }
    }
    if(hitcount = 10){
        won();
    }
}