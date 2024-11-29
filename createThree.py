

import os
oldpath = 'threeSketches'
while 1:
    path = input("path")
    name = input("name")
    if (path == ''):
        path = oldpath
    path = 'src/'+path+'/'+name
    os.system('mkdir '+path)
    #os.system('pushd '+path)
    os.system('touch '+path+'/'+name+'.jsx')
    os.system('touch '+path+'/'+name+'.module.css')

    os.system('touch '+path+'/index.js')
    os.system('echo "export {default} from '+"'./"+name+"'"+'"> '+path+'/index.js')
    forfile = '''

import React from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./%s.module.css";
const %s = () => {
    return (
        <Canvas>
            {/* Add lights, camera, and 3D objects here */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"orange"} />
            </mesh>
        </Canvas>
    );
};

export default %s;

    '''%(name,name,name)
    os.system("echo '%s' > %s"%(forfile,"%s/%s.jsx"%(path,name)))
