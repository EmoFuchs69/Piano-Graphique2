
class tableau1 extends Phaser.Scene {

    preload() {

        /// fond
        this.load.image('forest', 'assets/fond/forest.jpg');
        ///bg2

        ///bg
        this.load.image('ours', 'assets/bg/ours.png');
        this.load.image('biche', 'assets/bg/biche.png');
        this.load.image('canard', 'assets/bg/canard.png');
        this.load.image('ecureuil', 'assets/bg/ecureuil.png');
        this.load.image('herisson', 'assets/bg/herisson.png');
        this.load.image('lapin', 'assets/bg/lapin.png');
        this.load.image('marmotte', 'assets/bg/marmotte.png');
        this.load.image('mulot', 'assets/bg/mulot.png');
        this.load.image('oiseau', 'assets/bg/oiseau.png');
        this.load.image('putois', 'assets/bg/putois.png');
        this.load.image('raton', 'assets/bg/raton.png');
        this.load.image('renard', 'assets/bg/renard.png');
        ///1er plan
        this.load.image('forest2', 'assets/1plan/forest2.jpg');
        this.load.image('see', 'assets/1plan/see.png');



    }

    create() {
        /// Fond
        this.forest=this.add.container(0,0);

        let forest=this.add.image(-100,-50, 'forest').setOrigin(0,0);
        this.forest.add(forest);





        ///Bg2

        ///Bg
        let ours=this.add.image(-10,310, 'ours').setOrigin(0,0);
        ours.setScale(0.2)
        let biche=this.add.image(450,310, 'biche').setOrigin(0,0);
        biche.setScale(0.2)
        let ecureuil=this.add.image(300,210, 'ecureuil').setOrigin(0,0);
        ecureuil.setScale(0.2)
        let herisson=this.add.image(350,350, 'herisson').setOrigin(0,0);
        herisson.setScale(0.2)
        let canard=this.add.image(400,350, 'canard').setOrigin(0,0);
        canard.setScale(0.3)
        let lapin=this.add.image(300,310, 'lapin').setOrigin(0,0);
        lapin.setScale(0.2)
        let marmotte=this.add.image(220,370, 'marmotte').setOrigin(0,0);
        marmotte.setScale(0.2)
        let mulot=this.add.image(420,370, 'mulot').setOrigin(0,0);
        mulot.setScale(0.3)
        let oiseau=this.add.image(330,205, 'oiseau').setOrigin(0,0);
        oiseau.setScale(0.3)
        let putois=this.add.image(580,400, 'putois').setOrigin(0,0);
        putois.setScale(0.2)
        let raton=this.add.image(280,380, 'raton').setOrigin(0,0);
        raton.setScale(0.2)
        let renard=this.add.image(520,340, 'renard').setOrigin(0,0);
        renard.setScale(0.2)
        ///1er plan

        let see=this.add.image(-10,-10, 'see').setOrigin(0,0);
        see.setScale(0.8)

    }

}