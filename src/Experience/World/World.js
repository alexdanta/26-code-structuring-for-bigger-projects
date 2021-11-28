import * as THREE from 'three'
import Experience from "../Experience";
import Fox from '../Fox';
import Environment from './Environment';
import Floor from './Floor';

export default class World
{
    constructor ()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

     

  
        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            this.floor = new Floor() 
            this.fox = new Fox()
            this.environment = new Environment()
        })
    }
    
    update()
    {
        if(this.fox)
            this.fox.update()
    }
}