import Debug "mo:base/Debug";
import List "mo:base/List";

actor Notes {

  // let i : Nat = 1;

  public type Note = {
    title : Text;
    content : Text;
  };

  stable var listArr : List.List<Note> = List.nil<Note>();


  public func addItem(titleText : Text, contentText : Text) {

    let newNote : Note = {
      title = titleText;
      content = contentText;
    };

    listArr := List.push(newNote, listArr);
    Debug.print(debug_show (listArr));
  };

  public func removeItem(id : Nat) {
    // listArr := List.filter(listArr, func i { i != id });
    // Take, Drop, Append ...
  
    let newArr = List.take(listArr, id);
    Debug.print(debug_show(newArr));
    
    let dropList = List.drop(listArr, id + 1);
    Debug.print(debug_show(dropList));
    listArr := List.append(newArr, dropList);
  };

  public query func showNotes() : async [Note]{
    return List.toArray(listArr);
  };


};
