import * as THREE from 'three'
import Experience from "../Experience";

export default class Globe
{
    constructor( )
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        //  Debug
        if (this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('globe')
        }

        // Setup
        this.resource = this.resources.items.globeModel


        this.setModel()
        // this.setAnimation()
    }
    setModel()
    {
        this.model = this.resource.scene
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }
    
    update( )
    {

    }
}