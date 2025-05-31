document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const optionItems = document.querySelectorAll('.option-item');
    const optionPanels = document.querySelectorAll('.option-panel');
    const selectionHeading = document.getElementById('selection-heading');
    const responsiveSelectionHeading = document.getElementById('responsive-selection-heading');
    const productTitle = document.getElementById('product-title');
    const qtyValue = document.getElementById('qty-value');
    const decreaseQtyBtn = document.getElementById('decrease-qty');
    const increaseQtyBtn = document.getElementById('increase-qty');
    const rotateLeftBtn = document.getElementById('rotate-left');
    const rotateRightBtn = document.getElementById('rotate-right');
    const previewImage = document.getElementById('preview-main-image');

    // Function to check if we're on mobile
    function isMobile() {
        return window.innerWidth <= 1023;
    }

    // Function to format color ID for display
    function formatColorLabel(colorId) {
        if (!colorId) return '';
        const formattedLabel = colorId.replace(/^\d+\s+/, '');
        return formattedLabel;
    }
//Color Data goes here
  
    // Image rotation functionality
    const viewAngles = ['FrontView', 'SideView', 'BackView', 'AngleView'];
    let currentViewIndex = 0;

    // Set up the selected options object to track selections
    const selectedOptions = {
        haakband: '225 CM',
        zijgordijnen: '01 CREME',
        rand: 'Dezelfde Kleur als het zijgordijn',
        ophangband: '01 CREME',
        voorraamband: '01 CREME',
        franjes: '51 WIT 5CM',
        booggordijn: '01 CREME',
        'kussen-voor': '01 CREME',
        'kussen-achter': '01 CREME'
    };

    // Modified option click handler - centralized logic for both desktop and mobile
    function handleOptionClick(optionElement, optionType) {
        // Remove active class from all options
        document.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked option
        optionElement.classList.add('active');
        
        // Update selection heading
        const title = optionElement.querySelector('.option-title').textContent;
        document.getElementById('selection-heading').textContent = title;
        document.getElementById('responsive-selection-heading').textContent = title;
        
        // Hide all option panels
        document.querySelectorAll('.option-panel').forEach(panel => {
            panel.style.display = 'none';
        });
        
        // Show the selected option panel
        const targetPanel = document.getElementById(`${optionType}-options`);
        if (targetPanel) {
            targetPanel.style.display = 'block';
        }
        
        // ✅ Removed: No longer show/hide dropdown on mobile
        // The selection column is now always visible on mobile
    }

    // Helper function to create a special color option element
    function createSpecialOption(colorId, isSelected = false) {
        const colorDiv = document.createElement('div');
        colorDiv.className = `color-option ${isSelected ? 'selected' : ''}`;
        colorDiv.setAttribute('data-color', colorId);

        const sameLabel = document.createElement('div');
        sameLabel.className = 'same-label-color';
        sameLabel.textContent = colorId;
        colorDiv.appendChild(sameLabel);
        
        return colorDiv;
    }

    // Helper function to create a color option element
    function createColorOption(colorId, imgSrc, isSelected = false) {
        const colorDiv = document.createElement('div');
        colorDiv.className = `color-option ${isSelected ? 'selected' : ''}`;
        colorDiv.setAttribute('data-color', colorId);

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = colorId;
        colorDiv.appendChild(img);

        const colorLabel = document.createElement('div');
        colorLabel.className = 'color-label';
        colorLabel.textContent = formatColorLabel(colorId);
        colorDiv.appendChild(colorLabel);

        return colorDiv;
    }

    // Dynamically populate color options
    function populateColorOptions() {
        // Zijgordijnen options
        const zijgordijnenGrid = document.querySelector('#zijgordijnen-options .colors-grid');
        if (zijgordijnenGrid) {
            zijgordijnenGrid.innerHTML = '';
            colorData.curtainColors.forEach((color) => {
                const isSelected = color.id === selectedOptions.zijgordijnen;
                const colorDiv = createColorOption(color.id, color.imgSrc, isSelected);
                zijgordijnenGrid.appendChild(colorDiv);
            });
        }

        // Rand options
        const randGrid = document.querySelector('#rand-options .colors-grid');
        if (randGrid) {
            randGrid.innerHTML = '';
            colorData.trimColors.forEach((color) => {
                let colorDiv;
                const isSelected = color.id === selectedOptions.rand;

                if (color.special) {
                    colorDiv = createSpecialOption(color.id, isSelected);
                } else {
                    colorDiv = createColorOption(color.id, color.imgSrc, isSelected);
                }

                randGrid.appendChild(colorDiv);
            });
        }

        // Populate other color sections
        populateColorSection('ophangband-options', colorData.ophangbandColors);
        populateColorSection('voorraamband-options', colorData.voorraamBandColors);
        populateColorSection('franjes-options', colorData.franjesOptions);
        populateColorSection('booggordijn-options', colorData.booggordijnColors);
        populateColorSection('kussen-voor-options', colorData.kussenVoorColors);
        populateColorSection('kussen-achter-options', colorData.kussenAchterColors);
    }

    // Helper function to populate a specific color section
    function populateColorSection(sectionId, colors) {
        const grid = document.querySelector(`#${sectionId} .colors-grid`);
        if (grid) {
            grid.innerHTML = '';
            const optionType = sectionId.replace('-options', '');

            colors.forEach(color => {
                const isSelected = color.id === selectedOptions[optionType];
                const colorDiv = createColorOption(color.id, color.imgSrc, isSelected);
                grid.appendChild(colorDiv);
            });
        }
    }

    function updateProductView() {
        previewImage.style.transform = `rotateY(${currentViewIndex * 90}deg)`;
        previewImage.style.transition = 'transform 0.5s ease';
    }

    function updateProductImage() {
        const viewAngle = viewAngles[currentViewIndex];
        const curtainColor = selectedOptions.zijgordijnen;
        previewImage.src = `/api/placeholder/400/300`;
    }
    
    function updateProductTitle() {
        const formattedColor = formatColorLabel(selectedOptions.zijgordijnen);
        productTitle.textContent = `KLITTENBAND HAAKBAND Yellow - ${formattedColor}`;
    }

    // Rotation button events
    if (rotateLeftBtn) {
        rotateLeftBtn.addEventListener('click', function () {
            currentViewIndex = (currentViewIndex - 1 + viewAngles.length) % viewAngles.length;
            updateProductView();
        });
    }

    if (rotateRightBtn) {
        rotateRightBtn.addEventListener('click', function () {
            currentViewIndex = (currentViewIndex + 1) % viewAngles.length;
            updateProductView();
        });
    }

    // Handle desktop option clicks (works for both desktop and mobile now)
    document.querySelectorAll('.options-column > .option-item').forEach(item => {
        item.addEventListener('click', function() {
            const optionType = this.dataset.option;
            handleOptionClick(this, optionType);
        });
    });
    
    // Color selection handler
    document.addEventListener('click', function (e) {
        if (e.target.closest('.color-option')) {
            const colorOption = e.target.closest('.color-option');
            const parentContainer = colorOption.closest('.colors-grid');
            
            if (parentContainer) {
                // Remove selected class from all options in this container
                parentContainer.querySelectorAll('.color-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                colorOption.classList.add('selected');

                // Update selectedOptions object
                const parentPanel = colorOption.closest('.option-panel');
                if (parentPanel) {
                    const optionType = parentPanel.id.replace('-options', '');
                    if (optionType) {
                        const colorValue = colorOption.getAttribute('data-color');
                        selectedOptions[optionType] = colorValue;

                        if (optionType === 'zijgordijnen') {
                            updateProductTitle();
                        }
                    }
                }
            }
        }
    });
    
    // Quantity controls
    if (decreaseQtyBtn) {
        decreaseQtyBtn.addEventListener('click', function () {
            let qty = parseInt(qtyValue.textContent);
            if (qty > 1) {
                qtyValue.textContent = qty - 1;
            }
        });
    }

    if (increaseQtyBtn) {
        increaseQtyBtn.addEventListener('click', function () {
            let qty = parseInt(qtyValue.textContent);
            qtyValue.textContent = qty + 1;
        });
    }

    // Handle window resize to ensure proper layout
    window.addEventListener('resize', function() {
        // Force re-render of active states on resize
        const activeOption = document.querySelector('.options-column > .option-item.active');
        if (activeOption) {
            const optionType = activeOption.dataset.option;
            handleOptionClick(activeOption, optionType);
        }
    });
    
    // Initialize
    populateColorOptions();
    if (optionItems.length > 0) {
        optionItems[0].click();
    }
});