
class tableau1 extends Phaser.Scene {

    preload() {

        /// Fond
        this.load.image('forest', 'assets/fond/forest.jpg');
        ///Bg2

        ///Bg

        ///1er plan
        this.load.image('forest2', 'assets/1plan/forest2.jpg');

    }

    create() {
        /// Fond
        this.forest=this.add.container(0,0);

        let forest=this.add.image(-100,-50, 'forest').setOrigin(0,0);
        this.forest.add(forest);

        ///Bg2

        ///Bg

        ///1er plan



    }

}