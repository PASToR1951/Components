
// --- Sample Author Data ---
const authors = [
     { id: 'A001', name: 'Dr. Evelyn Reed', department: 'Physics', affiliation: 'University of Science', worksCount: 5,
      works: [ { title: 'Quantum Entanglement Dynamics', category: 'Synergy', researchAgenda: 'Quantum Computing', year: 2023, url: '#' }, { title: 'Advanced Particle Accelerators', category: 'Synthesis', researchAgenda: 'High Energy Physics', year: 2021, url: '#' }, { title: 'String Theory Models', category: 'Dissertation', researchAgenda: 'Theoretical Physics', year: 2019, url: '#' }, { title: 'Cosmological Constant Problem', category: 'Synergy', researchAgenda: 'Cosmology', year: 2018, url: '#' }, { title: 'Neutrino Oscillation Patterns', category: 'Synthesis', researchAgenda: 'Particle Physics', year: 2017, url: '#' } ] },
    { id: 'A002', name: 'Prof. Kenji Tanaka', department: 'Computer Science', affiliation: 'Tech Institute', worksCount: 7,
      works: [ { title: 'Machine Learning for NLP', category: 'Synergy', researchAgenda: 'Artificial Intelligence', year: 2024, url: '#' }, { title: 'Distributed Systems Architecture', category: 'Synthesis', researchAgenda: 'Cloud Computing', year: 2022, url: '#' }, { title: 'Cybersecurity Trends', category: 'Thesis', researchAgenda: 'Network Security', year: 2020, url: '#' }, { title: 'Blockchain Scalability Solutions', category: 'Synergy', researchAgenda: 'Distributed Ledger Tech', year: 2019, url: '#' }, { title: 'Algorithm Efficiency Analysis', category: 'Synthesis', researchAgenda: 'Theoretical CS', year: 2018, url: '#' }, { title: 'Quantum Computing Algorithms', category: 'Dissertation', researchAgenda: 'Quantum Computing', year: 2017, url: '#' }, { title: 'Edge Computing Paradigms', category: 'Synergy', researchAgenda: 'IoT & Edge', year: 2016, url: '#' } ] },
     { id: 'A003', name: 'Dr. Maria Garcia', department: 'Biology', affiliation: 'Life Sciences Center', worksCount: 2, works: [ { title: 'CRISPR Gene Editing Applications', category: 'Synergy', researchAgenda: 'Genomics', year: 2023, url: '#' }, { title: 'Cellular Metabolism Pathways', category: 'Synthesis', researchAgenda: 'Molecular Biology', year: 2021, url: '#' } ] },
     { id: 'A004', name: 'Dr. Samuel Chen', department: 'Chemistry', affiliation: 'University of Science', worksCount: 3, works: [ { title: 'Organic Synthesis Methods', category: 'Synthesis', researchAgenda: 'Organic Chemistry', year: 2022, url: '#' }, { title: 'Nanomaterial Properties', category: 'Synergy', researchAgenda: 'Materials Science', year: 2020, url: '#' }, { title: 'Catalysis in Green Chemistry', category: 'Thesis', researchAgenda: 'Environmental Chemistry', year: 2018, url: '#' } ] },
     { id: 'A005', name: 'Prof. Aisha Khan', department: 'Mathematics', affiliation: 'Tech Institute', worksCount: 5, works: [ { title: 'Topology and Geometry', category: 'Dissertation', researchAgenda: 'Pure Mathematics', year: 2024, url: '#' }, { title: 'Number Theory Applications', category: 'Synergy', researchAgenda: 'Applied Mathematics', year: 2023, url: '#' }, { title: 'Statistical Modeling Techniques', category: 'Synthesis', researchAgenda: 'Statistics', year: 2021, url: '#' }, { title: 'Graph Theory Algorithms', category: 'Synergy', researchAgenda: 'Discrete Mathematics', year: 2020, url: '#' }, { title: 'Abstract Algebra Structures', category: 'Thesis', researchAgenda: 'Pure Mathematics', year: 2019, url: '#' } ] },
     { id: 'A006', name: 'Dr. Ben Carter', department: 'Physics', affiliation: 'National Research Lab', worksCount: 2, works: [ { title: 'Astrophysical Fluid Dynamics', category: 'Synergy', researchAgenda: 'Astrophysics', year: 2022, url: '#' }, { title: 'Cosmic Microwave Background Analysis', category: 'Synthesis', researchAgenda: 'Cosmology', year: 2019, url: '#' } ] },
     { id: 'A007', name: 'Prof. Lena Petrova', department: 'Computer Science', affiliation: 'University of Science', worksCount: 3, works: [ { title: 'AI Ethics and Governance', category: 'Thesis', researchAgenda: 'Artificial Intelligence', year: 2024, url: '#' }, { title: 'Cloud Computing Security', category: 'Synergy', researchAgenda: 'Cybersecurity', year: 2023, url: '#' }, { title: 'Database Optimization Strategies', category: 'Synthesis', researchAgenda: 'Data Management', year: 2020, url: '#' } ] },
     { id: 'A008', name: 'Dr. Carlos Rossi', department: 'Biology', affiliation: 'Tech Institute', worksCount: 2, works: [ { title: 'Evolutionary Genetics', category: 'Dissertation', researchAgenda: 'Genetics', year: 2023, url: '#' }, { title: 'Plant Physiology under Stress', category: 'Synergy', researchAgenda: 'Botany', year: 2021, url: '#' } ] },
     { id: 'A009', name: 'Prof. Mei Lin', department: 'Chemistry', affiliation: 'Life Sciences Center', worksCount: 3, works: [ { title: 'Biochemistry of Proteins', category: 'Synthesis', researchAgenda: 'Biochemistry', year: 2024, url: '#' }, { title: 'Drug Discovery and Development', category: 'Synergy', researchAgenda: 'Pharmaceuticals', year: 2022, url: '#' }, { title: 'Spectroscopic Analysis Techniques', category: 'Thesis', researchAgenda: 'Analytical Chemistry', year: 2019, url: '#' } ] },
     { id: 'A010', name: 'Dr. David Miller', department: 'Mathematics', affiliation: 'National Research Lab', worksCount: 3, works: [ { title: 'Partial Differential Equations', category: 'Dissertation', researchAgenda: 'Applied Mathematics', year: 2023, url: '#' }, { title: 'Mathematical Physics', category: 'Synergy', researchAgenda: 'Theoretical Physics', year: 2021, url: '#' }, { title: 'Applied Probability Theory', category: 'Synthesis', researchAgenda: 'Statistics', year: 2018, url: '#' } ] },
     { id: 'A011', name: 'Prof. Sofia Dubois', department: 'Physics', affiliation: 'University of Science', worksCount: 1, works: [ { title: 'Condensed Matter Theory', category: 'Thesis', researchAgenda: 'Condensed Matter', year: 2024, url: '#' } ] },
     { id: 'A012', name: 'Dr. Ahmed Al-Farsi', department: 'Computer Science', affiliation: 'Tech Institute', worksCount: 0, works: [] },
];

// --- DOM Element References ---
const searchInput = document.getElementById('searchInput');
const departmentFilter = document.getElementById('departmentFilter');
const affiliationFilter = document.getElementById('affiliationFilter');
const authorListContainer = document.getElementById('authorList');
const noResultsMessage = document.getElementById('noResultsMessage');

// --- Populate Author Filter Dropdowns ---
function populateAuthorFilters() {
    const departments = new Set(); const affiliations = new Set();
    authors.forEach(author => { departments.add(author.department); affiliations.add(author.affiliation); });
    [...departments].sort().forEach(dept => { const option = document.createElement('option'); option.value = dept; option.textContent = dept; departmentFilter.appendChild(option); });
    [...affiliations].sort().forEach(aff => { const option = document.createElement('option'); option.value = aff; option.textContent = aff; affiliationFilter.appendChild(option); });
}

// --- Populate Work Filters for a Specific Author ---
function populateWorkFilters(authorId, authorIndex) {
    const author = authors.find(a => a.id === authorId);
    if (!author || !author.works || author.works.length === 0) return;
    const categoryFilter = document.getElementById(`workCategoryFilter-${authorId}-${authorIndex}`);
    const agendaFilter = document.getElementById(`workAgendaFilter-${authorId}-${authorIndex}`);
    const yearFilter = document.getElementById(`workYearFilter-${authorId}-${authorIndex}`);
    if (!categoryFilter || !agendaFilter || !yearFilter) return;
    const categories = new Set(); const agendas = new Set(); const years = new Set();
    author.works.forEach(work => { categories.add(work.category); agendas.add(work.researchAgenda); years.add(work.year); });
    const currentCategory = categoryFilter.value; categoryFilter.innerHTML = '<option value="">All Categories</option>';
    [...categories].sort().forEach(cat => { const option = document.createElement('option'); option.value = cat; option.textContent = cat; if (cat === currentCategory) option.selected = true; categoryFilter.appendChild(option); });
    const currentAgenda = agendaFilter.value; agendaFilter.innerHTML = '<option value="">All Agendas</option>';
    [...agendas].sort().forEach(agenda => { const option = document.createElement('option'); option.value = agenda; option.textContent = agenda; if (agenda === currentAgenda) option.selected = true; agendaFilter.appendChild(option); });
    const currentYear = yearFilter.value; yearFilter.innerHTML = '<option value="">All Years</option>';
    [...years].sort((a, b) => b - a).forEach(year => { const option = document.createElement('option'); option.value = year; option.textContent = year; if (year.toString() === currentYear) option.selected = true; yearFilter.appendChild(option); });
}

// --- Filter and Render Works for a Specific Author ---
function filterAndRenderWorks(authorId, authorIndex) {
     const author = authors.find(a => a.id === authorId);
     const worksContainer = document.getElementById(`worksContainer-${authorId}-${authorIndex}`);
     const categoryFilter = document.getElementById(`workCategoryFilter-${authorId}-${authorIndex}`);
     const agendaFilter = document.getElementById(`workAgendaFilter-${authorId}-${authorIndex}`);
     const yearFilter = document.getElementById(`workYearFilter-${authorId}-${authorIndex}`);
     if (!author || !worksContainer || !categoryFilter || !agendaFilter || !yearFilter) return;
     const selectedCategory = categoryFilter.value; const selectedAgenda = agendaFilter.value; const selectedYear = yearFilter.value;
     const filteredWorks = author.works.filter(work => {
         const categoryMatch = !selectedCategory || work.category === selectedCategory;
         const agendaMatch = !selectedAgenda || work.researchAgenda === selectedAgenda;
         const yearMatch = !selectedYear || work.year.toString() === selectedYear;
         return categoryMatch && agendaMatch && yearMatch;
     });
     let worksHtml = '<p class="text-sm text-gray-500 italic px-4">No works match the selected filters.</p>';
     if (filteredWorks.length > 0) {
         worksHtml = '<div class="space-y-2">'; // Use space-y for spacing between cards
         filteredWorks.forEach(work => {
             // Use prefixed class ad-work-card and ad-work-title-link
             worksHtml += `<div class="ad-work-card"><div class="flex justify-between items-center text-xs text-gray-500 mb-1"><span>${work.category}</span><span>${work.year}</span></div><a href="${work.url}" target="_blank" rel="noopener noreferrer" class="ad-work-title-link block text-sm mb-1">${work.title}</a><p class="text-xs text-gray-600"><span class="font-medium">Agenda:</span> ${work.researchAgenda}</p></div>`;
         });
         worksHtml += '</div>';
     } else if (!selectedCategory && !selectedAgenda && !selectedYear && author.works.length === 0) {
         worksHtml = '<p class="text-sm text-gray-500 italic px-4">No works listed.</p>';
     }
     worksContainer.innerHTML = worksHtml;
}

// --- Render Author List (Using prefixed classes) ---
function renderAuthors(filteredAuthors) {
    authorListContainer.innerHTML = '';
    if (filteredAuthors.length === 0) {
        noResultsMessage.classList.remove('hidden'); authorListContainer.classList.add('hidden');
    } else {
        noResultsMessage.classList.add('hidden'); authorListContainer.classList.remove('hidden');
        filteredAuthors.forEach((author, index) => {
            const card = document.createElement('div');
            // Use prefixed class ad-author-card
            card.className = 'ad-author-card bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col';
            card.setAttribute('data-author-id', author.id);

            const worksSectionId = `works-${author.id}-${index}`;
            const toggleButtonId = `toggle-${author.id}-${index}`;
            const workFiltersId = `workFilters-${author.id}-${index}`;
            const worksContainerId = `worksContainer-${author.id}-${index}`;
            const categoryFilterId = `workCategoryFilter-${author.id}-${index}`;
            const agendaFilterId = `workAgendaFilter-${author.id}-${index}`;
            const yearFilterId = `workYearFilter-${author.id}-${index}`;

            let initialWorksHtml = '<p class="text-sm text-gray-500 italic px-4">No works listed.</p>';
             if (author.works && author.works.length > 0) {
                 initialWorksHtml = '<div class="space-y-2">';
                 author.works.forEach(work => {
                     // Use prefixed class ad-work-card and ad-work-title-link
                     initialWorksHtml += `<div class="ad-work-card"><div class="flex justify-between items-center text-xs text-gray-500 mb-1"><span>${work.category}</span><span>${work.year}</span></div><a href="${work.url}" target="_blank" rel="noopener noreferrer" class="ad-work-title-link block text-sm mb-1">${work.title}</a><p class="text-xs text-gray-600"><span class="font-medium">Agenda:</span> ${work.researchAgenda}</p></div>`;
                 });
                 initialWorksHtml += '</div>';
             }

            // Use prefixed classes: ad-works-section, ad-work-filters, ad-work-filter-select, ad-edit-icon-button, ad-toggle-container, ad-toggle-button
            card.innerHTML = `
                <div class="p-4 flex-grow">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex-grow pr-4">
                            <div class="flex items-baseline mb-1"><h3 class="text-lg font-semibold text-green-700 mr-2">${author.name}</h3><span class="text-xs text-gray-500">(${author.id})</span></div>
                            <div class="text-sm text-gray-600"><span>${author.department}</span><span class="mx-1 text-gray-400">|</span><span>${author.affiliation}</span></div>
                        </div>
                        <div class="flex-shrink-0 flex justify-center items-center h-full"><button class="ad-edit-icon-button text-gray-500 hover:text-green-600 focus:outline-none" onclick="editAuthor('${author.id}')" title="Edit Author"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg></button></div>
                    </div>
                    <div id="${worksSectionId}" class="ad-works-section border-t border-gray-200 pt-2" data-button-id="${toggleButtonId}">
                        <div id="${workFiltersId}" class="ad-work-filters px-4">
                            <select id="${categoryFilterId}" class="ad-work-filter-select" onchange="filterAndRenderWorks('${author.id}', ${index})"><option value="">All Categories</option></select>
                            <select id="${agendaFilterId}" class="ad-work-filter-select" onchange="filterAndRenderWorks('${author.id}', ${index})"><option value="">All Agendas</option></select>
                            <select id="${yearFilterId}" class="ad-work-filter-select" onchange="filterAndRenderWorks('${author.id}', ${index})"><option value="">All Years</option></select>
                        </div>
                        <div id="${worksContainerId}" class="px-4">${initialWorksHtml}</div>
                    </div>
                </div>
                <div class="ad-toggle-container flex justify-center bg-green-100 py-2 border-t border-gray-200">
                    <button id="${toggleButtonId}" class="ad-toggle-button text-xs text-green-900 focus:outline-none" onclick="toggleWorks('${worksSectionId}', '${toggleButtonId}', '${workFiltersId}', '${author.id}', ${index})">
                        ${author.worksCount} Work${author.worksCount !== 1 ? 's' : ''} <span class="arrow ml-1">&#x25BC;</span>
                    </button>
                </div>
            `;
            authorListContainer.appendChild(card);
            if (author.works && author.works.length > 0) { populateWorkFilters(author.id, index); }
        });
    }
}

// --- Filter Authors Logic ---
function filterAuthors() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDepartment = departmentFilter.value;
    const selectedAffiliation = affiliationFilter.value;
    const filteredAuthors = authors.filter(author => {
        const nameMatch = author.name.toLowerCase().includes(searchTerm);
        const departmentMatch = !selectedDepartment || author.department === selectedDepartment;
        const affiliationMatch = !selectedAffiliation || author.affiliation === selectedAffiliation;
        return nameMatch && departmentMatch && affiliationMatch;
    });
    renderAuthors(filteredAuthors);
}

// --- Placeholder Edit Function ---
function editAuthor(authorId) {
    const authorToEdit = authors.find(author => author.id === authorId);
    alert(`Edit icon clicked for author ID: ${authorId} (Name: ${authorToEdit?.name})`);
}

// --- Collapse Work Section By ID ---
function collapseWorkSectionById(worksSectionId, buttonId) {
    const worksSection = document.getElementById(worksSectionId);
    const toggleButton = document.getElementById(buttonId);
    const arrowSpan = toggleButton ? toggleButton.querySelector('.arrow') : null;
    // Use prefixed class ad-works-section
    if (worksSection && worksSection.classList.contains('expanded')) {
        worksSection.classList.remove('expanded');
        if (arrowSpan) { arrowSpan.innerHTML = '&#x25BC;'; }
    }
}

// --- Toggle Works Section Visibility ---
function toggleWorks(worksSectionId, buttonId, workFiltersId, authorId, authorIndex) {
    const worksSection = document.getElementById(worksSectionId);
    const toggleButton = document.getElementById(buttonId);
    const workFilters = document.getElementById(workFiltersId);
    const arrowSpan = toggleButton.querySelector('.arrow');

    if (worksSection && toggleButton && arrowSpan && workFilters) {
        const isCurrentlyExpanded = worksSection.classList.contains('expanded');
        if (!isCurrentlyExpanded) {
            // Use prefixed class ad-works-section
            document.querySelectorAll('.ad-works-section.expanded').forEach(expandedSection => {
                if (expandedSection.id !== worksSectionId) {
                    const btnId = expandedSection.dataset.buttonId;
                    collapseWorkSectionById(expandedSection.id, btnId);
                }
            });
        }
        const isExpanded = worksSection.classList.toggle('expanded');
        if (isExpanded) {
            arrowSpan.innerHTML = '&#x25B2;';
            populateWorkFilters(authorId, authorIndex);
            filterAndRenderWorks(authorId, authorIndex);
        } else {
            arrowSpan.innerHTML = '&#x25BC;';
        }
    }
}

// --- Event Listeners ---
searchInput.addEventListener('input', filterAuthors);
departmentFilter.addEventListener('change', filterAuthors);
affiliationFilter.addEventListener('change', filterAuthors);

// --- Global Click Listener for Collapsing ---
document.addEventListener('click', function(event) {
    // Use prefixed classes ad-works-section and ad-author-card
    const expandedSections = document.querySelectorAll('.ad-works-section.expanded');
    expandedSections.forEach(section => {
        const authorCard = section.closest('.ad-author-card');
        if (authorCard && !authorCard.contains(event.target)) {
            const buttonId = section.dataset.buttonId;
            collapseWorkSectionById(section.id, buttonId);
        }
    });
});

// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', () => {
    populateAuthorFilters();
    renderAuthors(authors);
});
