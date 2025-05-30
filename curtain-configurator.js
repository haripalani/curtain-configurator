document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const optionItems = document.querySelectorAll('.option-item');
    const optionPanels = document.querySelectorAll('.option-panel');
    const selectionHeading = document.getElementById('selection-heading');
    const productTitle = document.getElementById('product-title');
    const qtyValue = document.getElementById('qty-value');
    const decreaseQtyBtn = document.getElementById('decrease-qty');
    const increaseQtyBtn = document.getElementById('increase-qty');
    const rotateLeftBtn = document.getElementById('rotate-left');
    const rotateRightBtn = document.getElementById('rotate-right');
    const previewImage = document.getElementById('preview-main-image');
    
    // Responsive elements
    const responsiveDropdown = document.getElementById('responsive-dropdown');
    const responsiveSelectionHeading = document.getElementById('responsive-selection-heading');
    const responsiveSelectionContent = document.getElementById('responsive-selection-content');

    // Function to format color ID for display
    function formatColorLabel(colorId) {
        if (!colorId) return '';
        const formattedLabel = colorId.replace(/^\d+\s+/, '');
        return formattedLabel;
    }

    // Color Data Configuration
   const colorData = {
        // Curtain colors for "zijgordijnen"
        curtainColors: [
            { id: '01 CREME', imgSrc: './Assets/Colors/Curtain color/01 Creme.png' },
            { id: '02 Yellow', imgSrc: './Assets/Colors/Curtain color/02 Yellow.png' },
            { id: '03 Brown', imgSrc: './Assets/Colors/Curtain color/03 Brown.png' },
            { id: '04 Red', imgSrc: './Assets/Colors/Curtain color/04 Red.png' },
            { id: '05 Dark-red', imgSrc: './Assets/Colors/Curtain color/05 Dark-red.png' },
            { id: '06 Camel', imgSrc: './Assets/Colors/Curtain color/06 Camel.png' },
            { id: '07 Choco', imgSrc: './Assets/Colors/Curtain color/07 Choco.png' },
            { id: '08 Green', imgSrc: './Assets/Colors/Curtain color/08 Green.png' },
            { id: '09 Blue', imgSrc: './Assets/Colors/Curtain color/09 Blue.png' },
            { id: '10 Grey', imgSrc: './Assets/Colors/Curtain color/10 Grey.png' },
            { id: '11 Dark-Grey', imgSrc: './Assets/Colors/Curtain color/11 Dark Grey.png' },
            { id: '12 Black', imgSrc: './Assets/Colors/Curtain color/12 Black.png' }
        ],
        // Trim colors for "rand"
        trimColors: [
            { id: 'Dezelfde Kleur als het zijgordijn', special: true },
            { id: '51 White', imgSrc: './Assets/Colors/Fringes/51 White.png' },
            { id: '52 Ivory', imgSrc: './Assets/Colors/Fringes/52 Ivory.png' },
            { id: '53 Sand', imgSrc: './Assets/Colors/Fringes/53 Sand.png' },
            { id: '54 Beige', imgSrc: './Assets/Colors/Fringes/54 Beige.png' },
            { id: '55 Ochore', imgSrc: './Assets/Colors/Fringes/55 Ochore.png' },
            { id: '56 Amber', imgSrc: './Assets/Colors/Fringes/56 Amber.png' },
            { id: '57 Fuchsia', imgSrc: './Assets/Colors/Fringes/57 Fuchsia.png' },
            { id: '58 Red', imgSrc: './Assets/Colors/Fringes/58 Red.png' },
            { id: '59 Cobalt', imgSrc: './Assets/Colors/Fringes/59 Cobalt.png' },
            { id: '60 Navy Marine', imgSrc: './Assets/Colors/Fringes/60 Navy Marine.png' },
            { id: '61 Brown', imgSrc: './Assets/Colors/Fringes/61 Brown.png' },
            { id: '62 Grey', imgSrc: './Assets/Colors/Fringes/62 Grey.png' },
            { id: '63 Dark Grey', imgSrc: './Assets/Colors/Fringes/63 Dark Grey.png' },
            { id: '64 Black', imgSrc: './Assets/Colors/Fringes/64 Black.png' }
        ],
         ophangbandColors: [
            { id: '01 CREME', imgSrc: './Assets/Colors/Curtain color/01 Creme.png' },
            { id: '02 Yellow', imgSrc: './Assets/Colors/Curtain color/02 Yellow.png' },
            { id: '03 Brown', imgSrc: './Assets/Colors/Curtain color/03 Brown.png' },
            { id: '04 Red', imgSrc: './Assets/Colors/Curtain color/04 Red.png' },
            { id: '05 Dark-red', imgSrc: './Assets/Colors/Curtain color/05 Dark-red.png' },
            { id: '06 Camel', imgSrc: './Assets/Colors/Curtain color/06 Camel.png' },
            { id: '07 Choco', imgSrc: './Assets/Colors/Curtain color/07 Choco.png' },
            { id: '08 Green', imgSrc: './Assets/Colors/Curtain color/08 Green.png' },
            { id: '09 Blue', imgSrc: './Assets/Colors/Curtain color/09 Blue.png' },
            { id: '10 Grey', imgSrc: './Assets/Colors/Curtain color/10 Grey.png' },
            { id: '11 Dark-Grey', imgSrc: './Assets/Colors/Curtain color/11 Dark Grey.png' },
            { id: '12 Black', imgSrc: './Assets/Colors/Curtain color/12 Black.png' },
            { id: '31 Yellow-Plush', imgSrc: './Assets/Colors/Plush/31 Yellow.png' },
            { id: '32 Red-Plush', imgSrc: './Assets/Colors/Plush/32 Red.png' },
            { id: '33 Purple-Plush', imgSrc: './Assets/Colors/Plush/33 Purple.png' },
            { id: '34 Green-Plush', imgSrc: './Assets/Colors/Plush/34 Green.png' },
            { id: '35 Blue-Plush', imgSrc: './Assets/Colors/Plush/35 Blue.png' },
            { id: '36 Brown-Plush', imgSrc: './Assets/Colors/Plush/36 Brown.png' },
            { id: '37 Grey-Plush', imgSrc: './Assets/Colors/Plush/37 Grey.png' }
        ],
        voorraamBandColors: [
            { id: '01 CREME', imgSrc: './Assets/Colors/Curtain color/01 Creme.png' },
            { id: '02 Yellow', imgSrc: './Assets/Colors/Curtain color/02 Yellow.png' },
            { id: '03 Brown', imgSrc: './Assets/Colors/Curtain color/03 Brown.png' },
            { id: '04 Red', imgSrc: './Assets/Colors/Curtain color/04 Red.png' },
            { id: '05 Dark-red', imgSrc: './Assets/Colors/Curtain color/05 Dark-red.png' },
            { id: '06 Camel', imgSrc: './Assets/Colors/Curtain color/06 Camel.png' },
            { id: '07 Choco', imgSrc: './Assets/Colors/Curtain color/07 Choco.png' },
            { id: '08 Green', imgSrc: './Assets/Colors/Curtain color/08 Green.png' },
            { id: '09 Blue', imgSrc: './Assets/Colors/Curtain color/09 Blue.png' },
            { id: '10 Grey', imgSrc: './Assets/Colors/Curtain color/10 Grey.png' },
            { id: '11 Dark-Grey', imgSrc: './Assets/Colors/Curtain color/11 Dark Grey.png' },
            { id: '12 Black', imgSrc: './Assets/Colors/Curtain color/12 Black.png' },
            { id: '31 Yellow-Plush', imgSrc: './Assets/Colors/Plush/31 Yellow.png' },
            { id: '32 Red-Plush', imgSrc: './Assets/Colors/Plush/32 Red.png' },
            { id: '33 Purple-Plush', imgSrc: './Assets/Colors/Plush/33 Purple.png' },
            { id: '34 Green-Plush', imgSrc: './Assets/Colors/Plush/34 Green.png' },
            { id: '35 Blue-Plush', imgSrc: './Assets/Colors/Plush/35 Blue.png' },
            { id: '36 Brown-Plush', imgSrc: './Assets/Colors/Plush/36 Brown.png' },
            { id: '37 Grey-Plush', imgSrc: './Assets/Colors/Plush/37 Grey.png' }
        ],
        franjesOptions: [
            { id: '51 White 5CM', imgSrc: './Assets/Colors/Fringes/51 White.png' },
            { id: '52 Ivory 5CM', imgSrc: './Assets/Colors/Fringes/52 Ivory.png' },
            { id: '53 Sand 5CM', imgSrc: './Assets/Colors/Fringes/53 Sand.png' },
            { id: '54 Beige 5CM', imgSrc: './Assets/Colors/Fringes/54 Beige.png' },
            { id: '55 Ochore 5CM', imgSrc: './Assets/Colors/Fringes/55 Ochore.png' },
            { id: '56 Amber 5CM', imgSrc: './Assets/Colors/Fringes/56 Amber.png' },
            { id: '57 Fuchsia 5CM', imgSrc: './Assets/Colors/Fringes/57 Fuchsia.png' },
            { id: '58 Red 5CM', imgSrc: './Assets/Colors/Fringes/58 Red.png' },
            { id: '59 Cobalt 5CM', imgSrc: './Assets/Colors/Fringes/59 Cobalt.png' },
            { id: '60 Navy Marine 5CM', imgSrc: './Assets/Colors/Fringes/60 Navy Marine.png' },
            { id: '61 Brown 5CM', imgSrc: './Assets/Colors/Fringes/61 Brown.png' },
            { id: '62 Grey 5CM', imgSrc: './Assets/Colors/Fringes/62 Grey.png' },
            { id: '63 Dark Grey 5CM', imgSrc: './Assets/Colors/Fringes/63 Dark Grey.png' },
            { id: '64 Black 5CM', imgSrc: './Assets/Colors/Fringes/64 Black.png' },
            { id: '51 White 7,5CM', imgSrc: './Assets/Colors/Fringes/51 White.png' },
            { id: '52 Ivory 7,5CM', imgSrc: './Assets/Colors/Fringes/52 Ivory.png' },
            { id: '53 Sand 7,5CM', imgSrc: './Assets/Colors/Fringes/53 Sand.png' },
            { id: '54 Beige 7,5CM', imgSrc: './Assets/Colors/Fringes/54 Beige.png' },
            { id: '55 Ochore 7,5CM', imgSrc: './Assets/Colors/Fringes/55 Ochore.png' },
            { id: '56 Amber 7,5CM', imgSrc: './Assets/Colors/Fringes/56 Amber.png' },
            { id: '57 Fuchsia 7,5CM', imgSrc: './Assets/Colors/Fringes/57 Fuchsia.png' },
            { id: '58 Red 7,5CM', imgSrc: './Assets/Colors/Fringes/58 Red.png' },
            { id: '59 Cobalt 7,5CM', imgSrc: './Assets/Colors/Fringes/59 Cobalt.png' },
            { id: '60 Navy Marine 7,5CM', imgSrc: './Assets/Colors/Fringes/60 Navy Marine.png' },
            { id: '61 Brown 7,5CM', imgSrc: './Assets/Colors/Fringes/61 Brown.png' },
            { id: '62 Grey 7,5CM', imgSrc: './Assets/Colors/Fringes/62 Grey.png' },
            { id: '63 Dark Grey 7,5CM', imgSrc: './Assets/Colors/Fringes/63 Dark Grey.png' },
            { id: '64 Black 7,5CM', imgSrc: './Assets/Colors/Fringes/64 Black.png' }
        ],
        booggordijnColors: [
            { id: '01 CREME', imgSrc: './Assets/Colors/Curtain color/01 Creme.png' },
            { id: '02 Yellow', imgSrc: './Assets/Colors/Curtain color/02 Yellow.png' },
            { id: '03 Brown', imgSrc: './Assets/Colors/Curtain color/03 Brown.png' },
            { id: '04 Red', imgSrc: './Assets/Colors/Curtain color/04 Red.png' },
            { id: '05 Dark-red', imgSrc: './Assets/Colors/Curtain color/05 Dark-red.png' },
            { id: '06 Camel', imgSrc: './Assets/Colors/Curtain color/06 Camel.png' },
            { id: '07 Choco', imgSrc: './Assets/Colors/Curtain color/07 Choco.png' },
            { id: '08 Green', imgSrc: './Assets/Colors/Curtain color/08 Green.png' },
            { id: '09 Blue', imgSrc: './Assets/Colors/Curtain color/09 Blue.png' },
            { id: '10 Grey', imgSrc: './Assets/Colors/Curtain color/10 Grey.png' },
            { id: '11 Dark-Grey', imgSrc: './Assets/Colors/Curtain color/11 Dark Grey.png' },
            { id: '12 Black', imgSrc: './Assets/Colors/Curtain color/12 Black.png' }
        ],
        kussenVoorColors: [
            { id: '01 CREME', imgSrc: './Assets/Colors/Curtain color/01 Creme.png' },
            { id: '02 Yellow', imgSrc: './Assets/Colors/Curtain color/02 Yellow.png' },
            { id: '03 Brown', imgSrc: './Assets/Colors/Curtain color/03 Brown.png' },
            { id: '04 Red', imgSrc: './Assets/Colors/Curtain color/04 Red.png' },
            { id: '05 Dark-red', imgSrc: './Assets/Colors/Curtain color/05 Dark-red.png' },
            { id: '06 Camel', imgSrc: './Assets/Colors/Curtain color/06 Camel.png' },
            { id: '07 Choco', imgSrc: './Assets/Colors/Curtain color/07 Choco.png' },
            { id: '08 Green', imgSrc: './Assets/Colors/Curtain color/08 Green.png' },
            { id: '09 Blue', imgSrc: './Assets/Colors/Curtain color/09 Blue.png' },
            { id: '10 Grey', imgSrc: './Assets/Colors/Curtain color/10 Grey.png' },
            { id: '11 Dark-Grey', imgSrc: './Assets/Colors/Curtain color/11 Dark Grey.png' },
            { id: '12 Black', imgSrc: './Assets/Colors/Curtain color/12 Black.png' },
            { id: '31 Yellow-Plush', imgSrc: './Assets/Colors/Plush/31 Yellow.png' },
            { id: '32 Red-Plush', imgSrc: './Assets/Colors/Plush/32 Red.png' },
            { id: '33 Purple-Plush', imgSrc: './Assets/Colors/Plush/33 Purple.png' },
            { id: '34 Green-Plush', imgSrc: './Assets/Colors/Plush/34 Green.png' },
            { id: '35 Blue-Plush', imgSrc: './Assets/Colors/Plush/35 Blue.png' },
            { id: '36 Brown-Plush', imgSrc: './Assets/Colors/Plush/36 Brown.png' },
            { id: '37 Grey-Plush', imgSrc: './Assets/Colors/Plush/37 Grey.png' }
        ],
        kussenAchterColors: [
            { id: '01 CREME', imgSrc: './Assets/Colors/Curtain color/01 Creme.png' },
            { id: '02 Yellow', imgSrc: './Assets/Colors/Curtain color/02 Yellow.png' },
            { id: '03 Brown', imgSrc: './Assets/Colors/Curtain color/03 Brown.png' },
            { id: '04 Red', imgSrc: './Assets/Colors/Curtain color/04 Red.png' },
            { id: '05 Dark-red', imgSrc: './Assets/Colors/Curtain color/05 Dark-red.png' },
            { id: '06 Camel', imgSrc: './Assets/Colors/Curtain color/06 Camel.png' },
            { id: '07 Choco', imgSrc: './Assets/Colors/Curtain color/07 Choco.png' },
            { id: '08 Green', imgSrc: './Assets/Colors/Curtain color/08 Green.png' },
            { id: '09 Blue', imgSrc: './Assets/Colors/Curtain color/09 Blue.png' },
            { id: '10 Grey', imgSrc: './Assets/Colors/Curtain color/10 Grey.png' },
            { id: '11 Dark-Grey', imgSrc: './Assets/Colors/Curtain color/11 Dark Grey.png' },
            { id: '12 Black', imgSrc: './Assets/Colors/Curtain color/12 Black.png' }
        ]
    };

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

    // Helper function to create a special color option element for responsive dropdown
    function createResponsiveSpecialOption(colorId, isSelected = false) {
        const colorDiv = document.createElement('div');
        colorDiv.className = `color-option ${isSelected ? 'selected' : ''}`;
        colorDiv.setAttribute('data-color', colorId);

        const sameLabel = document.createElement('div');
        sameLabel.className = 'same-label-color';
        sameLabel.textContent = colorId;
        colorDiv.appendChild(sameLabel);
        
        return colorDiv;
    }

    // Helper function to create a color option element for responsive dropdown
    function createResponsiveColorOption(colorId, imgSrc, isSelected = false) {
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

    // Function to populate responsive dropdown with list-style options
    function populateResponsiveColorOptions(container, colors, optionType) {
        container.innerHTML = '';
        
        colors.forEach(color => {
            const isSelected = color.id === selectedOptions[optionType];
            let colorDiv;
            
            if (color.special) {
                colorDiv = createResponsiveSpecialOption(color.id, isSelected);
            } else {
                colorDiv = createResponsiveColorOption(color.id, color.imgSrc, isSelected);
            }
            
            container.appendChild(colorDiv);
        });
    }

    // Function to copy content to responsive dropdown
    function updateResponsiveDropdownContent(optionType, optionTitle) {
        responsiveSelectionHeading.textContent = optionTitle;
        
        // Clear previous content
        responsiveSelectionContent.innerHTML = '';
        
        // Create the appropriate content based on option type
        if (optionType === 'haakband') {
            const fixedDiv = document.createElement('div');
            fixedDiv.className = 'fixed-selection';
            fixedDiv.textContent = 'Vaste optie: 225 CM';
            responsiveSelectionContent.appendChild(fixedDiv);
        } else {
            // Create colors container for list-style display
            const colorsContainer = document.createElement('div');
            colorsContainer.className = 'colors-grid';
            
            // Populate based on option type
            switch(optionType) {
                case 'zijgordijnen':
                    populateResponsiveColorOptions(colorsContainer, colorData.curtainColors, optionType);
                    break;
                case 'rand':
                    populateResponsiveColorOptions(colorsContainer, colorData.trimColors, optionType);
                    break;
                case 'ophangband':
                    populateResponsiveColorOptions(colorsContainer, colorData.ophangbandColors, optionType);
                    break;
                case 'voorraamband':
                    populateResponsiveColorOptions(colorsContainer, colorData.voorraamBandColors, optionType);
                    break;
                case 'franjes':
                    populateResponsiveColorOptions(colorsContainer, colorData.franjesOptions, optionType);
                    break;
                case 'booggordijn':
                    populateResponsiveColorOptions(colorsContainer, colorData.booggordijnColors, optionType);
                    break;
                case 'kussen-voor':
                    populateResponsiveColorOptions(colorsContainer, colorData.kussenVoorColors, optionType);
                    break;
                case 'kussen-achter':
                    populateResponsiveColorOptions(colorsContainer, colorData.kussenAchterColors, optionType);
                    break;
                default:
                    break;
            }
            
            responsiveSelectionContent.appendChild(colorsContainer);
        }
    }

    // Function to show responsive dropdown
    function showResponsiveDropdown() {
        responsiveDropdown.classList.add('show');
    }

    // Function to hide responsive dropdown
    function hideResponsiveDropdown() {
        responsiveDropdown.classList.remove('show');
    }

    // Check if we're in responsive mode
    function isResponsiveMode() {
        return window.innerWidth < 1024;
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

    // Option item click handlers
    optionItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all option items (both desktop and responsive)
            document.querySelectorAll('.option-item').forEach(opt => opt.classList.remove('active'));
            
            // Add active class to all matching option items
            const optionType = this.getAttribute('data-option');
            document.querySelectorAll(`[data-option="${optionType}"]`).forEach(opt => {
                opt.classList.add('active');
            });

            const optionTitle = this.querySelector('.option-title').textContent;

            // Update desktop view
            if (!isResponsiveMode()) {
                optionPanels.forEach(panel => panel.style.display = 'none');
                const targetPanel = document.getElementById(`${optionType}-options`);
                if (targetPanel) {
                    targetPanel.style.display = 'block';
                }

                if (selectionHeading) {
                    selectionHeading.textContent = optionTitle;
                }
            } else {
                // Update responsive dropdown content and show it
                updateResponsiveDropdownContent(optionType, optionTitle);
                showResponsiveDropdown();
            }
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

                        // Hide responsive dropdown after selection
                        if (isResponsiveMode()) {
                            hideResponsiveDropdown();
                        }
                    }
                }
            }
        }
        // Hide dropdown when clicking outside
        else if (isResponsiveMode() && !e.target.closest('.responsive-selection-dropdown') && 
                 !e.target.closest('.option-item')) {
            hideResponsiveDropdown();
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

    // Handle window resize
    window.addEventListener('resize', function() {
        if (!isResponsiveMode()) {
            hideResponsiveDropdown();
        }
    });
    
    // Initialize
    populateColorOptions();
    if (optionItems.length > 0) {
        optionItems[0].click();
    }
});