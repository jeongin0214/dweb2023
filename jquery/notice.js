var board = {
 
  notes : [],   
  hwrap : null, 
  hform: null,  
  hadd : null,  
  hgo : null,   
  hsel : null,  

  
  init : () => {
    
    board.hwrap = document.getElementById("board");
    board.hform = document.getElementById("noteform");
    board.hadd = document.getElementById("notetxt");
    board.hgo = document.getElementById("notego");

    let data = localStorage.getItem("notes");
    if (data !== null) { for (let n of JSON.parse(data)) {
      board.draw(n);
    }}

    
    board.hform.onsubmit = () => { return board.add(); };
    board.hadd.disabled = false;
    board.hgo.disabled = false;
  },

  
  draw : (note, first) => {
    // (C1) CREATE HTML NOTE
    let div = document.createElement("div");
    div.className = "note";
    div.draggable = true;
    div.innerHTML = `<div class="del" onclick="board.del(this.parentElement)">X</div> <div class="txt">${note}</div>`;

    
    div.ondragstart = (e) => {
      board.hsel = e.target;
      for (let n of board.notes) {
        n.classList.add("drag");
        if (n != board.hsel) { n.classList.add("hint"); }
      }
    };

    
    div.ondragenter = (e) => {
      if (div != board.hsel) { div.classList.add("active"); }
    };

    
    div.ondragleave = (e) => {
      div.classList.remove("active");
    };

    
    div.ondragend = (e) => { for (let n of board.notes) {
      n.classList.remove("drag");
      n.classList.remove("hint");
      n.classList.remove("active");
    }};

   
    div.ondragover = (e) => { e.preventDefault(); };

    
    div.ondrop = (e) => {
     
      e.preventDefault();

      if (e.target != board.hsel) {
       
        let idrag = 0, 
            idrop = 0; 
        for (let i=0; i<board.notes.length; i++) {
          if (board.hsel == board.notes[i]) { idrag = i; }
          if (e.target == board.notes[i]) { idrop = i; }
        }

   
        if (idrag > idrop) {
          board.hwrap.insertBefore(board.hsel, e.target);
        } else {
          board.hwrap.insertBefore(board.hsel, e.target.nextSibling);
        }


        board.save();
      }
    };

   
    div.ondblclick = () => {
  
      board.hsel = div.querySelector(".txt");


      for (let n of board.notes) { n.classList.add("lock"); }

  
      board.hadd.value = board.hsel.innerHTML;
      board.hgo.value = "Update";
      board.hform.onsubmit = () => { return board.update(); };
      // board.hadd.focus();
      board.hadd.select();
    };

    
    if (first) {
      board.notes.unshift(div);
      board.hwrap.insertBefore(div, board.hwrap.firstChild);
    } else {
      board.notes.push(div);
      board.hwrap.appendChild(div);
    }
  },

 
  add : () => {
    board.draw(board.hadd.value, true);
    board.hadd.value = "";
    board.save();
    return false;
  },


  del : (note) => { if (confirm("Delete note?")) {
    note.remove();
    board.save();
  }},

 
  update : () => {
    board.hsel.innerHTML = board.hadd.value;
    board.hadd.value = "";
    board.hgo.value = "Add";

    
    board.hform.onsubmit = () => { return board.add(); };

  
    board.save();

   
    for (let n of board.notes) { n.classList.remove("lock"); }
    return false;
  },


  save : () => {
  
    let data = [];
    board.notes = [];
    for (let n of board.hwrap.getElementsByClassName("note")) {
      board.notes.push(n);
      data.push(n.querySelector(".txt").innerHTML);
    }

 
    localStorage.setItem("notes", JSON.stringify(data));
  }
};

window.addEventListener("DOMContentLoaded", board.init);
