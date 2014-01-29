var AVLTree = function(compareMethod){
    var root = null;
    this.c = compareMethod;
    var n = 0;
    
    this.height = function(node){
      return node === null ? 0 : node.height;
    }
    
    var that = this;
    
    this.findLast = function(data){
      var w = root;
      var prev = null;
      var last = null;
      while(w !== null || w !== undefined){
        prev = w;
        var comp = that.c(data, w.data);
        if(comp < 0){
          w = w.left;
        }
        else if(comp > 0) {
          w = w.right;
        }
        else{
          last = w;
        }
      }
      last = last || prev;
      return last;
    }
    
    this.add = function(data){
      node = new AVLNode(); // new node
      node.data = data;
      
      var attemptAdd = function (node){ 
        //intended to clober exterior node variable
        //find the last
        var last = that.findLast(data);
        //return boolean add child on last
        
        if(that.root === null || that.root === undefined){
          that.root = node; // empty tree
        }
        else{
          var comp = that.c(node.data, last.data)
          if(comp < 0){
           last.left = node;
          }
          else if(comp > 0){
            last.right = node;
          }
          else{
            return false; // already exists in tree
          }
          node.parent = p;
        }
        n++;
        return true;
      }
      
      if(attemptAdd(node)){
        for(var w = node; node!= null; w = w.parent){
          w.h = Math.max(height(w.left), height(w.right));
        }
        that.fixup(u);
        return true;
      }
      return false;
    }
    
    this.fixup = function(node){
      while (node!= null){
        var dif = height(node.left) - height(node.right);
        if(dif > 1){
          //left heavy
          if(that.height(node.left.left) < that.height(node.left.right)){
            //left-right case
            that.rotateLeft(node.left);
          }
          //left-left case
          that.rortateRight(node);
        }
        else if( dif < -1){
          //right-heavy
          if(that.height(u.right.right) < that.height(u.right.left){
            //right-left case
            that.rotateRight(node.right);
          }
          //right-right case
          that.rotateLeft(node);
        }
        node = node.parent;
      }
    }
    
    var fixHeights = function(node){
      while(node !== null){
        node.h = 1 + Math.max(height(node.left), height(node.right));
        node = node.parent;
      }
    }
    
    this.rotateLeft = function(node){
      var w = node.right;
      w.parent = node.parent;
      if(w.parent !== null){
        if(w.parent.left === node){
          w.parent.left = w;
        } else{
          w.parent.right = w;
        }
      }
      node.right = w.left;
      if(node.right !== null){
        node.right.parent = w;
      }
      u.parent = w;
      w.left = node;
      if( node === root) { root = w; root.parent = null; }
      fixHeights(node);
    }
    
    this.rotateRight = function(node){
      var w = node.left;
      w.parent = node.parent;
      if(w.parent !== null){
        if(w.parent.left === node){
          w.parent.left = w;
        } else{
          w.parent.right = w;
        }
      }
      node.left = w.right;
      if(node.left !== null){
        node.left.parent = node;
      }
      node.parent = w;
      w.right = node;
      if(node === root) { root = node; root.parent = null; }
      fixHeights(node);
    }
    
    this.remove(node){
      if(node.left === null || node.right === null){
        that.splice(node);
      } else{
        var w = node.right;
        while(w.left !== null){
          w = w.left;
        }
        node.data = w.data;
        that.splce(w);
      }
    }
    
    this.splice = function(node){
      var w = node.parent;
      var s, p;
      if(node.left !== null){
        s = node.left;
      } else {
        s = node.right;
      }
      if( node === root) {
        root = s;
        p = null;
      }
      else{
        p = node.parent;
        if(p.left === node){
          p.left = s;
        } else{
          p.right = s;
        }
      }
      if(s !== null){
        s.parent = p;
      }
      n--;
      for(var z = node; z !== null; z = z.parent){
        z.h = Math.max(height(z.left), height(z.right)) + 1;
      }
      that.fixup(w);
    }
    
}
