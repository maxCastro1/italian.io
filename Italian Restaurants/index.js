const imageWidth = document.querySelector('.about-lower img').offsetWidth; // Get image width
const scrollContainer = document.getElementById('about-lower-scroll'); // Get scroll container element
const scrollLeftButton = document.getElementById('about-left-button'); // Get left scroll button
const scrollRightButton = document.getElementById('about-right-button'); // Get right scroll button

scrollLeftButton.addEventListener('click', () => {
  const currentScrollPosition = scrollContainer.scrollLeft;
  const targetScrollPosition = currentScrollPosition - imageWidth;
  scrollContainer.scrollLeft = targetScrollPosition;
});

scrollRightButton.addEventListener('click', () => {
  const currentScrollPosition = scrollContainer.scrollLeft;
  const targetScrollPosition = currentScrollPosition + imageWidth;
  scrollContainer.scrollLeft = targetScrollPosition;
});

    const appetizersButton = document.getElementById('appetizersButton');
    const pastaButton = document.getElementById('pastaButton');
    const pizzaButton = document.getElementById('pizzaButton');
    const saladsButton = document.getElementById('saladsButton');
    const soupsButton = document.getElementById('soupsButton');
    const dessertsButton = document.getElementById('dessertsButton');

    const menuItemsElement = document.querySelector('.menu-items');

    // Function to update menu items based on selected category
    function updateMenuItems(category) {
      menuItemsElement.innerHTML = ''; // Clear existing menu items

      // Add menu items for the selected category
      if (category === 'appetizers') {
        addMenuItem('Egg Dough', 'https://images.pexels.com/photos/5907591/pexels-photo-5907591.jpeg?auto=compress&cs=tinysrgb&w=1600', '$12');
        addMenuItem('Italian entre', 'https://images.pexels.com/photos/248413/pexels-photo-248413.jpeg?auto=compress&cs=tinysrgb&w=300', '$15');
        addMenuItem('Cidar plate', 'https://images.pexels.com/photos/6594962/pexels-photo-6594962.jpeg?auto=compress&cs=tinysrgb&w=300', '$10');
      } else if (category === 'pasta') {
        addMenuItem('Spaghetti', 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1600', '$18');
        addMenuItem('Lasagna', 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=300', '$20');
        addMenuItem('Penne', 'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=300', '$16');
      } else if (category === 'pizza') {
        addMenuItem('Italian pizza', 'https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&w=1600', '$14');
        addMenuItem('Pepperoni', 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300','$19');
    }   else if (category === 'salads') {
        addMenuItem('Greek Salad', 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=300', '$6');
        addMenuItem('Simple Salad', 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=300','$4');
    }
       else if (category === 'soups') {
        addMenuItem('Leek & potato soup', 'https://images.pexels.com/photos/1707270/pexels-photo-1707270.jpeg?auto=compress&cs=tinysrgb&w=300', '$9');
        addMenuItem('Tomato soup', 'https://images.pexels.com/photos/18955544/pexels-photo-18955544/free-photo-of-a-bowl-of-borscht-garnished-with-sour-cream-and-herbs.jpeg?auto=compress&cs=tinysrgb&w=300 ','$29');
    }
       else if (category === 'Desert') {
        addMenuItem('Ice cream', 'https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?auto=compress&cs=tinysrgb&w=300', '$4');
        addMenuItem('Blueberries cake', 'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load ','$9');
    }
}

    function addMenuItem(disheName, imageUrl, dishPrice) {
      const menuItemDiv = document.createElement('div');
      const menuItemImage = document.createElement('img');
      const menuItemNameElement = document.createElement('p');
      const menuItemPriceElement = document.createElement('p');

      menuItemImage.src = imageUrl;
      menuItemNameElement.textContent = disheName;
      menuItemPriceElement.textContent = dishPrice;

      menuItemDiv.appendChild(menuItemImage);
      menuItemDiv.appendChild(menuItemNameElement);
      menuItemDiv.appendChild(menuItemPriceElement);

      menuItemsElement.appendChild(menuItemDiv);
    }

    
    function removeAllSelectedClasses() {
        const selectedButtons = document.querySelectorAll('.selected');
        for (const button of selectedButtons) {
          button.classList.remove('selected');
        }
      }
    // Add event listeners to buttons
    appetizersButton.addEventListener('click', () => {
        updateMenuItems('appetizers');
        removeAllSelectedClasses()
        appetizersButton.classList.add('selected');
      });
      
      pastaButton.addEventListener('click', () => {
        updateMenuItems('pasta');
        removeAllSelectedClasses()
        pastaButton.classList.add('selected');
      });
      
      pizzaButton.addEventListener('click', () => {
        updateMenuItems('pizza');
        removeAllSelectedClasses()
        pizzaButton.classList.add('selected');
      });
      
      saladsButton.addEventListener('click', () => {
        updateMenuItems('salads');
        removeAllSelectedClasses()
        saladsButton.classList.add('selected');
      });
      
      soupsButton.addEventListener('click', () => {
        updateMenuItems('soups');
        removeAllSelectedClasses()
        saladsButton.classList.add('selected');
      })
      
      dessertsButton.addEventListener('click', () => {
        updateMenuItems('Desert');
        removeAllSelectedClasses()
        saladsButton.classList.add('selected');
      })
// ------------------------------ANIMATION--------------

const menuOpenButton = document.getElementById('open-menu-button');
const menuCloseButton = document.getElementById('menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const navItems = document.getElementsByClassName('nav-items');
// ok
menuOpenButton.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';

    mobileMenu.style.opacity = 1;
      for (i=0 ; i <= navItems.length-1 ; i++){
          
          gsap.to(navItems[i], {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1,
              delay: i/10,
            });
      }

  });
  menuCloseButton.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    mobileMenu.style.opacity = 0;
    for (i=0 ; i <= navItems.length-1 ; i++){
      console.log(i)
      gsap.to(navItems[i], {
          clipPath: "inset(90% 0% 0% 0%)",
          duration: 0
        });
  }
  });