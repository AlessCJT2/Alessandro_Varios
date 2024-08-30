class Treenode{ //Tambien en AvlTree????
    private chackBalanceFactor(){
        if (subtree.isleaf()){
            if (subtree.data === value){
                return;
            }else{
                throw new Error()
            }
        }
    
        if (value < subtree.data){
            //nos movemos al lado izquierdo
            this.chekBalanceFactor(value, subtree.left)
            const balance = this.balanceFactor(subtree)
            if (balance === 0 || balance === -1 || balance === 1){
                return;
            }
            if (balance === 2){
                const child = subtree.left;
                let grandchild;
                if (child?.left){
                    grandchild = child.left
                    this.rotateRight(subtree);
                } else{
                    grandchild = child?.right;
                }
            }

            if (balance === -2){
                const child.right;
                if(child && child.right){
                    //rotacion simple
                } else if (child && child.left){
                    //rotacion doble
                }
                
            }
        } else{
            //nos movemos al lado derecho 
        }
    }

}

class AvlTree{
    private rotateRight(subtree: Treenode){
        const child = subtree.left;
        if(child === null){
            throw new Error();
        }

        child.right = subtree;
        subtree.left = null;

        //modifcar esta rotacion para eliminar el enlace del padre al hijo 
    }

    private rotateLeft(subtree: Treenode){
        const parentData = subtree.data
        const child = subtree.right;
        if(child === null){
            throw new Error();
        }

        const grandchild = child.right;
        if(grandchild === null){
            throw new Error();
        }

        subtree.data = child.data
        subtree.left = new Treenode(parentData)
        subtree.right = grandchild;
        child.right = null;



        child.left = subtree
        subtree.right = null;


    }
}


