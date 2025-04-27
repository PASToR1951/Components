        // --- DATA ---
        const sampleAuthor = {
            author_id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
            full_name: "Dr. Evelyn Reed",
            affiliation: "Starlight University",
            department: "Astrophysics",
            year_of_graduation: 2010,
            email: "e.reed@starlight.edu",
            linkedin: "https://linkedin.com/in/evelynreed",
            orcid_id: "0000-0001-2345-6789",
            bio: "Dr. Evelyn Reed is a leading researcher in the field of exoplanetary science. Her work focuses on the atmospheric composition of distant worlds and the search for habitable environments beyond our solar system. She is passionate about science communication and mentoring the next generation of astronomers. Her recent publications explore novel techniques for detecting biosignatures in exoplanet atmospheres.",
            profile_picture: null, // Use null or undefined for no picture initially
            publications: [
                { id: "pub1", title: "Atmospheric Characterization of GJ 1214b", category: "Synergy", year: 2015, link: "https://example.com/Synergy1", tags: ["Exoplanets", "Atmosphere", "Spectroscopy"] },
                { id: "pub2", title: "Searching for Biosignatures on TRAPPIST-1e", category: "Synergy", year: 2018, tags: ["Exoplanets", "Biosignatures", "Habitable Zones"] },
                { id: "pub3", title: "Novel Techniques in Exoplanet Detection", category: "Confluence", year: 2019, link: "https://example.com/conf1", tags: ["Exoplanets", "Telescopes", "Instrumentation", "Data Analysis", "Machine Learning", "Statistics", "Bayesian Inference"] },
                { id: "pub4", title: "The Evolution of Planetary Atmospheres", category: "Dissertation", year: 2010, tags: ["Planetary Science", "Atmospheric Evolution", "Modeling"] },
                { id: "pub5", title: "Early Universe Cosmology Models", category: "Thesis", year: 2006, tags: ["Cosmology", "Early Universe", "Inflation"] },
                { id: "pub6", title: "High-Contrast Imaging for Exoplanet Discovery", category: "Confluence", year: 2021, tags: ["Exoplanets", "Imaging", "Adaptive Optics"] },
                { id: "pub7", title: "Galaxy Formation and Evolution", category: "Synergy", year: 2022, tags: ["Galaxies", "Formation", "Evolution", "Simulations", "Observations", "Redshift Surveys"] },
                { id: "pub8", title: "Dark Matter Distribution in Galaxies", category: "Dissertation", year: 2014, tags: ["Dark Matter", "Galaxies", "Haloes"] },
                { id: "pub9", title: "Supermassive Black Hole Growth", category: "Confluence", year: 2017, tags: ["Black Holes", "AGN", "Galaxy Evolution"] },
                { id: "pub10", title: "The Cosmic Microwave Background", category: "Thesis", year: 2008, tags: ["Cosmology", "CMB", "Early Universe"] },
            ],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        const allCategories = ['Thesis', 'Dissertation', 'Confluence', 'Synergy'];

        // --- STATE VARIABLES ---
        let isEditing = false;
        let currentAuthorData = JSON.parse(JSON.stringify(sampleAuthor)); // Deep copy
        let editedAuthorData = JSON.parse(JSON.stringify(sampleAuthor)); // Deep copy for edits
        let fieldErrors = {};
        let jsonError = null;
        let publicationsJson = '';
        let selectedPublication = null;
        let searchQuery = '';
        let selectedCategories = [];
        let selectedTags = [];
        let isTagFilterOpen = false;
        let debounceTimeout = null;

        // --- DOM ELEMENTS ---
        // Buttons
        const editButton = document.getElementById('edit-button');
        const saveButton = document.getElementById('save-button');
        const cancelButton = document.getElementById('cancel-button');
        // Profile View Elements
        const avatarImage = document.getElementById('avatar-image');
        const avatarPlaceholder = document.getElementById('avatar-placeholder');
        const avatarInitials = document.getElementById('avatar-initials');
        const displayName = document.getElementById('display-full_name');
        const displayAffiliation = document.getElementById('display-affiliation');
        const displayDepartmentContainer = document.getElementById('display-department-container');
        const displayDepartment = document.getElementById('display-department');
        const displayYogContainer = document.getElementById('display-year_of_graduation-container');
        const displayYog = document.getElementById('display-year_of_graduation');
        const displayEmailContainer = document.getElementById('display-email-container');
        const displayEmail = document.getElementById('display-email');
        const displayLinkedinContainer = document.getElementById('display-linkedin-container');
        const displayLinkedin = document.getElementById('display-linkedin');
        const displayOrcidContainer = document.getElementById('display-orcid_id-container');
        const displayOrcid = document.getElementById('display-orcid_id');
        const displayBio = document.getElementById('display-bio');
        // Profile Edit Elements
        const editNameContainer = document.getElementById('edit-full_name-container');
        const editNameInput = document.getElementById('edit-full_name');
        const errorName = document.getElementById('error-full_name');
        const editAffiliationContainer = document.getElementById('edit-affiliation-container');
        const editAffiliationInput = document.getElementById('edit-affiliation');
        const errorAffiliation = document.getElementById('error-affiliation');
        const editDepartmentContainer = document.getElementById('edit-department-container');
        const editDepartmentInput = document.getElementById('edit-department');
        const errorDepartment = document.getElementById('error-department');
        const editYogContainer = document.getElementById('edit-year_of_graduation-container');
        const editYogInput = document.getElementById('edit-year_of_graduation');
        const editEmailContainer = document.getElementById('edit-email-container');
        const editEmailInput = document.getElementById('edit-email');
        const editLinkedinContainer = document.getElementById('edit-linkedin-container');
        const editLinkedinInput = document.getElementById('edit-linkedin');
        const editOrcidContainer = document.getElementById('edit-orcid_id-container');
        const editOrcidInput = document.getElementById('edit-orcid_id');
        const editBioContainer = document.getElementById('edit-bio-container');
        const editBioInput = document.getElementById('edit-bio');
        // Publications Elements
        const publicationsCount = document.getElementById('publications-count');
        const publicationsDescription = document.getElementById('publications-description');
        const viewPublicationsContainer = document.getElementById('view-publications-container');
        const editPublicationsContainer = document.getElementById('edit-publications-container');
        const editPublicationsTextarea = document.getElementById('edit-publications');
        const errorPublications = document.getElementById('error-publications');
        const publicationsList = document.getElementById('publications-list');
        const noResultsMessage = document.getElementById('no-results-message');
        // Search & Filter Elements
        const searchInput = document.getElementById('publication-search');
        const categoryFilterContainer = document.getElementById('category-filter-container');
        const tagFilterToggle = document.getElementById('tag-filter-toggle');
        const tagFilterContent = document.getElementById('tag-filter-content');
        const tagFilterButtons = document.getElementById('tag-filter-buttons');
        const tagFilterChevronDown = document.getElementById('tag-filter-chevron-down');
        const tagFilterChevronUp = document.getElementById('tag-filter-chevron-up');
        // Modal Elements
        const modal = document.getElementById('publication-modal');
        const modalTitle = document.getElementById('publication-modal-title');
        const modalCategory = document.getElementById('modal-category');
        const modalYear = document.getElementById('modal-year');
        const modalLinkContainer = document.getElementById('modal-link-container');
        const modalLink = document.getElementById('modal-link');
        const modalLinkText = document.getElementById('modal-link-text');
        const modalTagsContainer = document.getElementById('modal-tags-container');
        const modalTags = document.getElementById('modal-tags');
        const modalCloseButton = document.getElementById('modal-close-button');
        const modalCloseButtonFooter = document.getElementById('modal-close-button-footer');


        // --- HELPER FUNCTIONS ---

        /**
         * Generates initials from a name string.
         * @param {string} name - The full name.
         * @returns {string} - The initials (up to 2 chars).
         */
        function getInitials(name = '') {
            return name
                .split(' ')
                .map((n) => n[0])
                .filter(Boolean)
                .slice(0, 2)
                .join('')
                .toUpperCase();
        }

        /**
         * Debounces a function call.
         * @param {Function} func - The function to debounce.
         * @param {number} delay - The debounce delay in milliseconds.
         */
        function debounce(func, delay) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(func, delay);
        }

        /**
         * Toggles visibility of an element.
         * @param {HTMLElement} element - The element to toggle.
         * @param {boolean} show - True to show, false to hide.
         */
        function toggleElement(element, show) {
            if (element) {
                element.classList.toggle('hidden', !show);
            }
        }

        /**
         * Sets the text content of an element safely.
         * @param {HTMLElement} element - The target element.
         * @param {string | number} text - The text to set.
         */
         function setText(element, text) {
            if (element) {
                element.textContent = text == null ? '' : String(text); // Use empty string for null/undefined
            }
         }

        /**
         * Sets the value of an input/textarea element safely.
         * @param {HTMLInputElement|HTMLTextAreaElement} element - The target element.
         * @param {string|number} value - The value to set.
         */
         function setValue(element, value) {
             if (element) {
                 element.value = value == null ? '' : String(value); // Use empty string for null/undefined
             }
         }

        /**
         * Updates the disabled state and styles of the Save button.
         */
        function updateSaveButtonState() {
            const hasFieldErrors = Object.keys(fieldErrors).length > 0;
            const hasJsonError = !!jsonError;
            const requiredFieldsEmpty = !editedAuthorData.full_name?.trim() ||
                                        !editedAuthorData.affiliation?.trim() ||
                                        !editedAuthorData.department?.trim();

            const isDisabled = hasFieldErrors || hasJsonError || requiredFieldsEmpty;
            saveButton.disabled = isDisabled;
            // Tailwind classes for disabled state are handled via :disabled pseudo-class in HTML
        }

        /**
         * Validates a specific field and updates the fieldErrors state.
         * @param {string} name - The name of the field.
         * @param {string} value - The current value of the field.
         */
        function validateField(name, value) {
            let error = null;
            const inputElement = document.getElementById(`edit-${name}`); // Get the input element

            if (['full_name', 'affiliation', 'department'].includes(name)) {
                if (!value.trim()) {
                    error = 'This field is required';
                }
            }
            // Add more specific validations if needed (e.g., email format)

            const errorElement = document.getElementById(`error-${name}`);
            if (error) {
                fieldErrors[name] = error;
                setText(errorElement, error);
                toggleElement(errorElement, true);
                // Add error border class
                if (inputElement) {
                    inputElement.classList.add('border-red-500');
                    inputElement.classList.remove('border-gray-300', 'focus:ring-green-500');
                }

            } else {
                delete fieldErrors[name];
                toggleElement(errorElement, false);
                 // Remove error border class
                if (inputElement) {
                    inputElement.classList.remove('border-red-500');
                    inputElement.classList.add('border-gray-300', 'focus:ring-green-500');
                }
            }
            updateSaveButtonState();
        }

        // --- RENDER FUNCTIONS ---

        /**
         * Renders the profile section based on the provided author data and edit state.
         * @param {object} author - The author data to display.
         */
        function renderProfile(author) {
            const data = isEditing ? editedAuthorData : author;

            // Avatar
            if (data.profile_picture) {
                avatarImage.src = data.profile_picture;
                avatarImage.alt = `Profile picture of ${data.full_name}`;
                toggleElement(avatarImage, true);
                toggleElement(avatarPlaceholder, false);
                // Add error handler
                avatarImage.onerror = () => {
                    avatarImage.onerror = null; // Prevent infinite loop
                    setText(avatarInitials, getInitials(data.full_name));
                    toggleElement(avatarImage, false);
                    toggleElement(avatarPlaceholder, true);
                };
            } else {
                setText(avatarInitials, getInitials(data.full_name));
                toggleElement(avatarImage, false);
                toggleElement(avatarPlaceholder, true);
            }

            // View Mode Elements
            setText(displayName, data.full_name || 'Unnamed Author');
            setText(displayAffiliation, data.affiliation || 'No affiliation specified');
            setText(displayDepartment, data.department || 'N/A');
            toggleElement(displayDepartmentContainer, true); // Always show container in view mode

            toggleElement(displayYogContainer, !!data.year_of_graduation);
            setText(displayYog, data.year_of_graduation);

            toggleElement(displayEmailContainer, !!data.email);
            setText(displayEmail, data.email);
            if (displayEmail) displayEmail.href = `mailto:${data.email}`;

            toggleElement(displayLinkedinContainer, !!data.linkedin);
            setText(displayLinkedin, data.linkedin ? data.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '') : '');
            if (displayLinkedin) displayLinkedin.href = data.linkedin || '#';

            toggleElement(displayOrcidContainer, !!data.orcid_id);
            setText(displayOrcid, data.orcid_id);

            // Bio display logic
            const bioElement = document.getElementById('display-bio'); // Get the correct bio element
             if (!data.bio && !isEditing) {
                 bioElement.innerHTML = `<span class="italic text-gray-500">No biography provided.</span>`;
             } else {
                  setText(bioElement, data.bio || '');
             }


            // Edit Mode Elements (Values)
            setValue(editNameInput, data.full_name);
            setValue(editAffiliationInput, data.affiliation);
            setValue(editDepartmentInput, data.department);
            setValue(editYogInput, data.year_of_graduation);
            setValue(editEmailInput, data.email);
            setValue(editLinkedinInput, data.linkedin);
            setValue(editOrcidInput, data.orcid_id);
            setValue(editBioInput, data.bio);

            // Toggle visibility based on isEditing state
            toggleElement(displayName, !isEditing);
            toggleElement(displayAffiliation, !isEditing);
            toggleElement(displayDepartmentContainer, !isEditing); // Hide container in edit mode
            toggleElement(displayYogContainer, !isEditing && !!data.year_of_graduation);
            toggleElement(displayEmailContainer, !isEditing && !!data.email);
            toggleElement(displayLinkedinContainer, !isEditing && !!data.linkedin);
            toggleElement(displayOrcidContainer, !isEditing && !!data.orcid_id);
            toggleElement(bioElement, !isEditing); // Toggle the correct bio display element


            toggleElement(editNameContainer, isEditing);
            toggleElement(editAffiliationContainer, isEditing);
            toggleElement(editDepartmentContainer, isEditing);
            toggleElement(editYogContainer, isEditing);
            toggleElement(editEmailContainer, isEditing);
            toggleElement(editLinkedinContainer, isEditing);
            toggleElement(editOrcidContainer, isEditing);
            toggleElement(editBioContainer, isEditing);

            // Clear errors when switching modes
            if (!isEditing) {
                fieldErrors = {};
                document.querySelectorAll('[id^="error-"]').forEach(el => toggleElement(el, false));
                 document.querySelectorAll('input.border-red-500, textarea.border-red-500').forEach(el => {
                    el.classList.remove('border-red-500');
                    el.classList.add('border-gray-300', 'focus:ring-green-500');
                 });
            } else {
                // Re-validate fields when entering edit mode
                validateField('full_name', editNameInput.value);
                validateField('affiliation', editAffiliationInput.value);
                validateField('department', editDepartmentInput.value);
            }
        }

        /**
         * Renders a single publication item HTML string.
         * @param {object} publication - The publication data.
         * @returns {string} - The HTML string for the publication item.
         */
        function createPublicationItemHTML(publication) {
            const { id, title, category, year, tags } = publication;
            const maxTagsToShow = 5;
            const tagsToShow = tags.slice(0, maxTagsToShow);
            const remainingTagCount = tags.length - tagsToShow.length;

            // Use gray background for tags in light mode
            const tagBaseClasses = "text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full inline-flex items-center";
            const tagIconSVG = `<svg class="icon icon-sm mr-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`;

            const tagSpans = tagsToShow.map(tag => `
                <span class="${tagBaseClasses}">
                    ${tagIconSVG}
                    ${tag}
                </span>
            `).join('');

            const showMoreButtonHTML = remainingTagCount > 0 ? `
                <button type="button" class="show-more-tags-button text-xs h-auto px-3 py-1 mt-2 border border-gray-300 hover:bg-gray-100 rounded-md text-gray-700" data-pub-id="${id}" aria-label="Show ${remainingTagCount} more tags for ${title}">
                    Show ${remainingTagCount} more
                </button>
            ` : '';

             const allTagsHTML = tags.map(tag => `
                <span class="${tagBaseClasses}">
                    ${tagIconSVG}
                    ${tag}
                </span>
            `).join('');

            return `
                <div class="publication-item border-b border-gray-200 pb-4 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors p-4 rounded-md group"
                     data-pub-id="${id}" role="button" tabindex="0" aria-label="View details for ${title}">
                    <h3 class="text-lg font-semibold text-green-600 group-hover:text-green-700 transition-colors duration-200 mb-1">
                        ${title}
                    </h3>
                    <div class="flex flex-wrap items-center text-gray-600 text-sm mb-2">
                        <span><span class="font-medium">Category:</span> ${category}</span>
                        <span class="mx-2 text-gray-400" aria-hidden="true">•</span>
                        <span><span class="font-medium">Year:</span> ${year}</span>
                    </div>
                    ${tags.length > 0 ? `
                        <div class="mt-2">
                            <div class="tags-container flex flex-wrap gap-1" data-tags-limited='${JSON.stringify(tagSpans)}' data-tags-all='${JSON.stringify(allTagsHTML)}'>
                                ${tagSpans}
                            </div>
                            ${showMoreButtonHTML}
                        </div>
                    ` : ''}
                </div>
            `;
        }


        /**
         * Renders the list of publications based on filtering criteria.
         */
        function filterAndRenderPublications() {
            let results = currentAuthorData.publications;
            const query = searchQuery.toLowerCase();

            // Filter by Category
            if (selectedCategories.length > 0) {
                results = results.filter(pub => selectedCategories.includes(pub.category));
            }

            // Filter by Tags
            if (selectedTags.length > 0) {
                results = results.filter(pub => pub.tags.some(tag => selectedTags.includes(tag)));
            }

            // Filter by Search Query
            if (query) {
                results = results.filter(item => item.title.toLowerCase().includes(query));
            }

            // Sort by Year Descending
            results.sort((a, b) => b.year - a.year);

            // Render
            publicationsList.innerHTML = ''; // Clear previous results
            if (results.length > 0) {
                results.forEach(pub => {
                    publicationsList.innerHTML += createPublicationItemHTML(pub);
                });
                toggleElement(noResultsMessage, false);
            } else {
                toggleElement(noResultsMessage, true);
            }

            // Add event listeners for newly rendered items
            addPublicationItemListeners();
        }

        /**
         * Renders the category filter buttons.
         */
        function renderCategoryFilters() {
            // Clear existing buttons except the label
            while (categoryFilterContainer.children.length > 1) {
                 categoryFilterContainer.removeChild(categoryFilterContainer.lastChild);
            }
            allCategories.forEach(category => {
                const button = document.createElement('button');
                button.type = 'button';
                button.textContent = category;
                button.dataset.category = category;
                // Use green for active state
                button.className = `category-filter-button rounded-full text-xs px-3 py-1 h-auto transition-colors duration-150 border ${
                    selectedCategories.includes(category)
                        ? "bg-green-600 text-white hover:bg-green-700 border-green-600" // Active state (Green)
                        : "text-gray-700 hover:bg-gray-100 border-gray-300" // Inactive state
                }`;
                button.setAttribute('aria-pressed', selectedCategories.includes(category));
                categoryFilterContainer.appendChild(button);
            });
        }

        /**
         * Renders the tag filter buttons.
         */
        function renderTagFilters() {
            tagFilterButtons.innerHTML = ''; // Clear existing
            const allTags = Array.from(new Set(currentAuthorData.publications.flatMap(pub => pub.tags))).sort();

            if (allTags.length > 0) {
                 const tagIconSVG = `<svg class="icon icon-sm mr-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`;
                allTags.forEach(tag => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.dataset.tag = tag;
                     // Use green for active state
                    button.className = `tag-filter-button rounded-full text-xs px-3 py-1 h-auto inline-flex items-center transition-colors duration-150 border ${
                        selectedTags.includes(tag)
                            ? "bg-green-600 text-white hover:bg-green-700 border-green-600" // Active state (Green)
                            : "text-gray-700 hover:bg-gray-100 border-gray-300" // Inactive state
                    }`;
                    button.setAttribute('aria-pressed', selectedTags.includes(tag));
                    button.innerHTML = `
                        ${tagIconSVG}
                        ${tag}
                    `;
                    tagFilterButtons.appendChild(button);
                });
            } else {
                 tagFilterButtons.innerHTML = `<p class="text-sm text-gray-500">No tags available for filtering.</p>`;
            }
        }


        /**
         * Renders the publication modal with details.
         * @param {object} publication - The publication to display in the modal.
         */
        function renderModal(publication) {
            if (!publication) {
                toggleElement(modal, false);
                return;
            }
            selectedPublication = publication; // Keep track

            setText(modalTitle, publication.title);
            setText(modalCategory, publication.category);
            setText(modalYear, publication.year);

            // Link
            toggleElement(modalLinkContainer, !!publication.link);
            if (publication.link) {
                modalLink.href = publication.link;
                setText(modalLinkText, publication.link);
            }

            // Tags
            toggleElement(modalTagsContainer, publication.tags.length > 0);
            modalTags.innerHTML = ''; // Clear previous tags
            if (publication.tags.length > 0) {
                const tagBaseClasses = "text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full inline-flex items-center shadow-sm border border-gray-200";
                const tagIconSVG = `<svg class="icon icon-sm mr-1.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`;

                publication.tags.forEach(tag => {
                    modalTags.innerHTML += `
                        <span class="${tagBaseClasses}">
                           ${tagIconSVG}
                            ${tag}
                        </span>
                    `;
                });
            }

            toggleElement(modal, true); // Show the modal
        }

        /** Updates the UI to reflect the current edit state */
        function updateEditModeUI() {
            toggleElement(editButton, !isEditing);
            toggleElement(saveButton, isEditing);
            toggleElement(cancelButton, isEditing);

            toggleElement(viewPublicationsContainer, !isEditing);
            toggleElement(editPublicationsContainer, isEditing);

            // Update descriptions based on mode
            setText(publicationsDescription, isEditing
                ? "Edit publications below using the specified JSON format."
                : "Browse, search, and filter the list of publications.");

            renderProfile(currentAuthorData); // Re-render profile section

            if (isEditing) {
                // Populate JSON textarea
                publicationsJson = JSON.stringify(currentAuthorData.publications, null, 2);
                setValue(editPublicationsTextarea, publicationsJson);
                // Reset JSON error state
                jsonError = null;
                toggleElement(errorPublications, false);
                editPublicationsTextarea.classList.remove('border-red-500');
                editPublicationsTextarea.classList.add('border-gray-300', 'focus:ring-green-500');


            } else {
                 // Clear selection and errors when exiting edit mode
                 selectedPublication = null;
                 jsonError = null;
                 fieldErrors = {};
                 filterAndRenderPublications(); // Re-render publication list in view mode
                 renderCategoryFilters(); // Ensure filters reflect current state
                 renderTagFilters();
            }
             updateSaveButtonState(); // Update save button status
        }

        // --- EVENT HANDLERS ---

        function handleEditClick() {
            isEditing = true;
            editedAuthorData = JSON.parse(JSON.stringify(currentAuthorData)); // Reset edits
            updateEditModeUI();
        }

        function handleCancelClick() {
            isEditing = false;
            editedAuthorData = JSON.parse(JSON.stringify(currentAuthorData)); // Discard edits
            updateEditModeUI();
        }

        function handleSaveClick() {
            // Final validation check
            validateField('full_name', editedAuthorData.full_name);
            validateField('affiliation', editedAuthorData.affiliation);
            validateField('department', editedAuthorData.department);

            if (Object.keys(fieldErrors).length > 0 || jsonError) {
                console.error("Save prevented due to validation errors:", { fieldErrors, jsonError });
                // Optionally show a general error message to the user
                alert("Cannot save. Please fix the errors indicated.");
                return;
            }

            // Prepare final data
            const finalAuthorData = {
                ...editedAuthorData,
                year_of_graduation: editedAuthorData.year_of_graduation ? parseInt(String(editedAuthorData.year_of_graduation), 10) : null,
                updated_at: new Date().toISOString(),
                // Ensure publications are updated from the potentially validated JSON
                publications: editedAuthorData.publications
            };

            // Update main data store (in a real app, this would be an API call)
            currentAuthorData = JSON.parse(JSON.stringify(finalAuthorData)); // Deep copy
            console.log("Saved author data:", currentAuthorData);

            // Exit edit mode and update UI
            isEditing = false;
            updateEditModeUI();
            setText(publicationsCount, currentAuthorData.publications.length); // Update count after save
            // Optionally show success message
            // alert("Profile saved successfully!");
        }

        /** Handles input changes for profile fields */
        function handleProfileInputChange(event) {
            const { name, value } = event.target;
            editedAuthorData[name] = value; // Update the temporary edit data

            // Validate the field on change
            validateField(name, value);
        }

        /** Handles changes in the publications JSON textarea */
        function handlePublicationsChange(event) {
            publicationsJson = event.target.value;
            jsonError = null; // Reset error initially
            toggleElement(errorPublications, false);
            editPublicationsTextarea.classList.remove('border-red-500');
            editPublicationsTextarea.classList.add('border-gray-300', 'focus:ring-green-500');


            try {
                const parsedPublications = JSON.parse(publicationsJson);
                if (!Array.isArray(parsedPublications)) {
                    throw new Error("Input must be a valid JSON array of publications.");
                }

                const validCategoriesSet = new Set(allCategories);
                 parsedPublications.forEach((pub, index) => {
                    if (typeof pub !== 'object' || pub === null) throw new Error(`Item at index ${index} is not a valid object.`);
                    if (!pub.id || typeof pub.id !== 'string') throw new Error(`Publication at index ${index} requires a string 'id'.`);
                    if (!pub.title || typeof pub.title !== 'string') throw new Error(`Publication at index ${index} requires a string 'title'.`);
                    if (!pub.category || !validCategoriesSet.has(pub.category)) throw new Error(`Publication at index ${index} requires a valid 'category' (${allCategories.join(', ')}).`);
                    if (pub.year === undefined || typeof pub.year !== 'number' || !Number.isInteger(pub.year)) throw new Error(`Publication at index ${index} requires an integer 'year'.`);
                    if (pub.link !== undefined && pub.link !== null && typeof pub.link !== 'string') throw new Error(`Publication at index ${index} has an invalid 'link' (must be string, null, or undefined).`);
                    if (!pub.tags || !Array.isArray(pub.tags) || pub.tags.some((tag) => typeof tag !== 'string')) throw new Error(`Publication at index ${index} requires 'tags' to be an array of strings.`);
                 });

                // If validation passes, update the edited data's publications
                editedAuthorData.publications = parsedPublications;

            } catch (error) {
                jsonError = error instanceof Error ? error.message : "Invalid JSON format or structure.";
                setText(errorPublications, `JSON Validation Error: ${jsonError}`);
                toggleElement(errorPublications, true);
                editPublicationsTextarea.classList.add('border-red-500');
                editPublicationsTextarea.classList.remove('border-gray-300', 'focus:ring-green-500');
            }
             updateSaveButtonState();
        }

        /** Handles search input changes with debouncing */
        function handleSearchChange(event) {
            searchQuery = event.target.value;
            debounce(filterAndRenderPublications, 300); // Debounce filtering
        }

        /** Handles clicks on category filter buttons */
        function handleCategoryFilterClick(event) {
            const button = event.target.closest('.category-filter-button');
            if (!button) return;

            const category = button.dataset.category;
            if (selectedCategories.includes(category)) {
                selectedCategories = selectedCategories.filter(c => c !== category);
            } else {
                selectedCategories.push(category);
            }
            renderCategoryFilters(); // Re-render buttons to show selection state
            filterAndRenderPublications(); // Re-filter results
        }

         /** Handles clicks on tag filter buttons */
        function handleTagFilterClick(event) {
            const button = event.target.closest('.tag-filter-button');
            if (!button) return;

            const tag = button.dataset.tag;
            if (selectedTags.includes(tag)) {
                selectedTags = selectedTags.filter(t => t !== tag);
            } else {
                selectedTags.push(tag);
            }
            renderTagFilters(); // Re-render buttons
            filterAndRenderPublications(); // Re-filter results
        }

        /** Toggles the visibility of the tag filter section */
        function handleTagFilterToggle() {
            isTagFilterOpen = !isTagFilterOpen;
            tagFilterContent.classList.toggle('open', isTagFilterOpen);
            tagFilterToggle.setAttribute('aria-expanded', isTagFilterOpen);
            toggleElement(tagFilterChevronDown, !isTagFilterOpen);
            toggleElement(tagFilterChevronUp, isTagFilterOpen);
        }

        /** Handles clicks on individual publication items to open the modal */
        function handlePublicationItemClick(event) {
             if (isEditing) return; // Don't open modal in edit mode

             const item = event.target.closest('.publication-item');
             if (!item) return;

             const pubId = item.dataset.pubId;
             const publication = currentAuthorData.publications.find(p => p.id === pubId);
             if (publication) {
                 renderModal(publication);
             }
        }

         /** Handles clicks on the "Show More Tags" button */
        function handleShowMoreTagsClick(event) {
            const button = event.target.closest('.show-more-tags-button');
            if (!button) return;

            event.stopPropagation(); // Prevent triggering publication item click

            const tagsContainer = button.closest('.mt-2').querySelector('.tags-container');
            if (tagsContainer) {
                try {
                    // Safely parse the JSON string from the data attribute
                    const allTagsHTML = JSON.parse(tagsContainer.dataset.tagsAll || '""');
                    tagsContainer.innerHTML = allTagsHTML; // Replace with all tags
                    button.remove(); // Remove the "Show More" button
                } catch (e) {
                    console.error("Error parsing tags data attribute:", e);
                    // Fallback or error handling if JSON is invalid
                }
            }
        }


        /** Closes the publication modal */
        function closeModal() {
            selectedPublication = null;
            toggleElement(modal, false);
        }

        // --- EVENT LISTENERS ---

        editButton.addEventListener('click', handleEditClick);
        cancelButton.addEventListener('click', handleCancelClick);
        saveButton.addEventListener('click', handleSaveClick);

        // Add listeners for profile input fields
        editNameInput.addEventListener('input', handleProfileInputChange);
        editAffiliationInput.addEventListener('input', handleProfileInputChange);
        editDepartmentInput.addEventListener('input', handleProfileInputChange);
        editYogInput.addEventListener('input', handleProfileInputChange);
        editEmailInput.addEventListener('input', handleProfileInputChange);
        editLinkedinInput.addEventListener('input', handleProfileInputChange);
        editOrcidInput.addEventListener('input', handleProfileInputChange);
        editBioInput.addEventListener('input', handleProfileInputChange);

        // Listener for publications JSON textarea
        editPublicationsTextarea.addEventListener('input', handlePublicationsChange);

        // Listener for search input
        searchInput.addEventListener('input', handleSearchChange);

        // Listener for category filters (delegated)
        categoryFilterContainer.addEventListener('click', handleCategoryFilterClick);

        // Listener for tag filters (delegated)
        tagFilterButtons.addEventListener('click', handleTagFilterClick);
        tagFilterToggle.addEventListener('click', handleTagFilterToggle);


        // Listener for publication items (delegated) and show more tags
        function addPublicationItemListeners() {
             publicationsList.querySelectorAll('.publication-item').forEach(item => {
                item.addEventListener('click', handlePublicationItemClick);
                // Add keydown listener for accessibility
                item.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handlePublicationItemClick(e);
                    }
                });
             });
             publicationsList.querySelectorAll('.show-more-tags-button').forEach(button => {
                 button.addEventListener('click', handleShowMoreTagsClick);
             });
        }


        // Modal listeners
        modal.addEventListener('click', (event) => {
            // Close if clicked on the overlay itself, not the content
            if (event.target === modal) {
                closeModal();
            }
        });
        modalCloseButton.addEventListener('click', closeModal);
        modalCloseButtonFooter.addEventListener('click', closeModal);


        // --- INITIALIZATION ---
        document.addEventListener('DOMContentLoaded', () => {
            setText(publicationsCount, currentAuthorData.publications.length);
            updateEditModeUI(); // Initial render in view mode
            filterAndRenderPublications(); // Initial render of publications
            renderCategoryFilters();
            renderTagFilters();
            console.log("Author Profile Initialized (Light Mode - Green)");
        });
