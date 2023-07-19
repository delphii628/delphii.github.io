function DrawNavBar(navbar){
   navbar = navbar.split("\n")

   var navbarHTML = ""
   for(var i = 0; i < navbar.length; i++){
      var navbarItem = navbar[i];

      var itemType = navbarItem.split("[")[0];
      var innertext = navbarItem.split("[")[1].split("]")[0];
      var href = `href="${navbarItem.split("(")[1].split(")")[0]}"`
      
      
      var tempNavBarItem = "";

      var maybeActive = "";
      if(itemType.includes("*")){
         maybeActive = " active";
         href = ""
      }

      var maybeRight = "";
      if(itemType.includes("~")){
         maybeRight = ` style="float:right"`
      }


      if(itemType.includes("-") || itemType.includes("~") ){ // regular
         tempNavBarItem += `<li${maybeRight}><a ${href} class="${maybeActive}">${innertext}</a></li>`;
      }
      else if(itemType.includes(">")){// dropdown header
         tempNavBarItem += `<li${maybeRight} class="dropdown">
         <a ${href} class="btn-dropdown${maybeActive}">${innertext}</a>
         <div class="dropdown-content">`;
      }
      else if(itemType.includes("=")){ // dropdown item
         tempNavBarItem += `<a ${href} class="${maybeActive}">${innertext}</a>`;
      }
      else{
         console.log(`Error drawing nav bar at item: ${i}`);
      }

      navbarHTML += tempNavBarItem;
   }
   document.getElementById("navbar").innerHTML = navbarHTML;
}
