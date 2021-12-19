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
        let ecureuil=this.add.image(240,420, 'ecureuil').setOrigin(0,0);
        ecureuil.setScale(0.2)


        ///1er plan

        let see=this.add.image(-10,-10, 'see').setOrigin(0,0);
        see.setScale(0.8)





        //les touches
        this.lettres = "azertyuiopqsdfghjklmwxcvbn".split("")
        console.log("touches");
        console.log(this.lettres);
        //fonction du clavier
        this.initKeyboard();
        this.images();
        this.creerClavier();
    }



    images() {
        this.biche = this.add.image(450,210, 'biche').setOrigin(0, 0);
        this.biche.visible=false
        this.biche.alpha=0

        this.cannard = this.add.image(700, 400, 'canard').setOrigin(0, 0);
        this.cannard.visible=false
        this.cannard.alpha=0

        this.ecureuil = this.add.image(1600, 800, 'ecureuil').setOrigin(0, 0);
        this.ecureuil .visible=false
        this.ecureuil.alpha=0

        this.herisson = this.add.image(1770, 930, 'herisson').setOrigin(0, 0);
        this.herisson.visible=false
        this.herisson.alpha=0

        this.lapin = this.add.image(1400, 600, 'lapin').setOrigin(0, 0);
        this.lapin.visible=false
        this.lapin.alpha=0

        this.marmotte = this.add.image(1100, 500, 'marmotte').setOrigin(0, 0);
        this.marmotte.visible=false
        this.marmotte.alpha=0

    }






    /**
     * Affiche les lettres du clavier
     * histoire de voir ce qui se passe
     */
    creerClavier(){
        //espacement entre les lettres = largeur de la scène / nombre de lettres
        let espacement = (this.game.config.width-2) / this.lettres.length; // -2 c'est pour avour une petite marge d'un pixel
        let x=1;
        for(let lettre of this.lettres){
            let objetGraphique=this.add.text(x,1,lettre,{
                color:"#FFFFFF", //blanc
                align:"center",
                backgroundColor:"#000000", //noir
                fixedWidth:espacement-1  // -1 c'est pour avoir une petite marge d'un pixel entre les lettres
            });
            //position X de la rouche suivante
            x+=espacement;
            //donne un nom à l'élément graphique
            objetGraphique.name=lettre;
        }
    }



    initKeyboard() {

        let me = this;
            this.input.keyboard.on('keydown', function (kevent) {
                console.log("keydown", kevent.key, kevent)
                for (let lettre of me.lettres) {
                    if (kevent.key === lettre) {
                        /**
                         *
                         * @type {Phaser.GameObjects.Text}
                         */
                        let objetGraphique = me.children.getByName(lettre);
                        objetGraphique.toucheEnfoncee = true;

                    }
                }

            });
        this.input.keyboard.on('keyup', function (kevent) {
            console.log("keyup", kevent.key, kevent)
            for (let lettre of me.lettres) {
                if (kevent.key === lettre) {
                    /**
                     * Obtenir la touche à partir de la lettre
                     * @type {Phaser.GameObjects.Text}
                     */
                    let touche = me.children.getByName(lettre);
                    touche.toucheEnfoncee = false;
                    touche.actif = !touche.actif; //alterne un fois ce sera actif, une fois ça le sera plus.
                    //appelle une fonction
                    me.quandToucheRelachee(kevent.key, touche)
                }
            }

        });
    }

    quandToucheRelachee(lettre,   objetGraphique) {

        //commande touches
        if (lettre === "a"){
            if (this.biche.visible==false){
                this.CompositionA()
            }
            this.biche.visible= !this.biche.visible;
            this.CompositionA()
        }
        if (lettre === "z") {
            this.canard.visible= !this.canard.visible;
            this.CompositionZ()
        }
        if (lettre === "e") {
            this.ecureuil.visible= !this.ecureuil.visible;
            this.CompositionE()
        }
        if (lettre === "r") {
            this.herisson.visible= !this.herisson.visible;
            this.CompositionR()
        }
        if (lettre === "t") {
            this.lapin.visible= !this.lapin.visible;
            this.CompositionT()
        }
        if (lettre === "y") {
            this.marmotte.visible= !this.marmotte.visible;
            this.CompositionY()
        }

    }
    update(){

        if (this.startup==false){
            this.welcome.play()
            this.startup=true
        }

        //pour chacune des lettres on va tester si il faut faire des choses ou non
        for (let lettre of this.lettres) {

            //--- interaction sur le clavier ---

            /**
             * La touche qui correspond à la lettre
             * @type {Phaser.GameObjects.Text}
             */
            let touche = this.children.getByName(lettre);
            //si enfoncée le fond de touche est gris
            if (touche.toucheEnfoncee) {
                touche.setBackgroundColor("#888888")
            } else {
                touche.setBackgroundColor("#345EE3")
            }
            //si actif le texte est vert sinon blanc
            if (touche.actif) {
                touche.setColor("#00FF00")
            } else {
                touche.setColor("#FFFFFF")
            }
        }
    }
    CompositionA(){
        this.tweens.add({
            targets: this.biche,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.biche.alpha=0
    }
    CompositionZ() {
        this.tweens.add({
            targets: this.canard,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.canard.alpha = 0
    }
    CompositionE() {
        this.tweens.add({
            targets: this.ecureuil,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.ecureuil.alpha = 0
    }
    CompositionR() {
        this.tweens.add({
            targets: this.herisson,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.herisson.alpha = 0
    }
    CompositionT() {
        this.tweens.add({
            targets: this.lapin,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.lapin.alpha = 0
    }
    CompositionY() {
        this.tweens.add({
            targets: this.marmotte,
            duration: 20,
            alpha: 1,
            repeat: 0,
            yoyo: false,
        });
        this.marmotte.alpha = 0
    }
    }
