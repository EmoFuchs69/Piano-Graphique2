
class tableau1 extends Phaser.Scene {

    preload() {

        /// Fond
        this.load.image('forest', 'assets/fond/forest.jpg');
        ///Bg2

        ///Bg

        ///1er plan
        this.load.image('forest2', 'assets/1plan/forest2.jpg');
        this.load.image('see', 'assets/1plan/see.png');



    }

    create() {
        /// Fond
        this.forest=this.add.container(0,0);

        let forest=this.add.image(-100,-50, 'forest').setOrigin(0,0);
        this.forest.add(forest);

        let see=this.add.image(-10,-10, 'see').setOrigin(0,0);
        see.setScale(0.8)



        ///Bg2

        ///Bg

        ///1er plan



    }

}