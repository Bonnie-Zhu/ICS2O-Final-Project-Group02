/* global Phaser */
// Copyright (c) 2020 Janet Do All rights reserved
//
// Created by: Janet Do
// Created on: Sep 2020
// This is the menu scene

/**
 * This class is the menu scene
 */
class MenuScene extends Phaser.Scene {
    constructor() {
      super({ key: "menuScene" })
  
      this.menuSceneBackgroundImage = null
      this.startButton = null
    }
  
    /**
     * Can be defined on your own Scenes
     * This method is called when the Scene is started by the SceneManager.
     * before preload() and create()
     * @param {object} data - any data passed via  ScenePlugin.add() or ScenePlugin.start()
     */
    init(data) {
      this.cameras.main.setBackgroundColor("ffffff")
    }
  
    /**
     * Can be defined on your own Scenes
     * Use this to load your game assets
     */
    preload() {
      console.log("Menu Scene")
      this.load.image("menuSceneBackground", "./assets/menu.png")
      this.load.image("startButton", "./assets/playbutton.png")
    }
  
    /**
     * Can be defined on your own Scenes
     * Use it to create your game objects
     * @param {object} data - any data passed via  ScenePlugin.add() or ScenePlugin.start()
     */
    create(data) {
      this.menuSceneBackgroundImage = this.add.sprite(0,0, "menuSceneBackground")
      this.menuSceneBackgroundImage.x = 1920 / 2
      this.menuSceneBackgroundImage.y = 1080 / 2
  
      this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
      this.startButton.setInteractive({useHandCursor: true })
      this.startButton.on("pointerdown", () => this.clickButton())
    }
  
    /**
     * Should be overridden by your own Scenes
     * This method is called once pr step game while the scene is running
     * @param {number} time - The current time
     * @param {number} delta - the delta time in ms since the last frame
     */
    update(time, delta) {
      //pass
    }
      clickButton() {
     this.scene.start("gameScene")
  }
  }
  
  export default MenuScene
 