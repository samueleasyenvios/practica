import React from 'react';

import Routes from './routes/Routes';

import { configureFakeBackend } from './helpers';

// Themes

// For Default import Default.scss
import './assets/scss/Default.scss';
// For Dark import Default-Dark.scss
// import './assets/scss/Default-Dark.scss';

// For Saas import Saas.scss
// import './assets/scss/Saas.scss';
// For Dark import Saas-Dark.scss
// import './assets/scss/Saas-Dark.scss';

// For Modern demo import Modern.scss
// import './assets/scss/Modern.scss';
// For Modern dark demo import Modern-Dark.scss
// import './assets/scss/Modern-Dark.scss';

// For Creative demo import Creative.scss
// import './assets/scss/Creative.scss';
// For Creative dark demo import Creative-Dark.scss
// import './assets/scss/Creative-Dark.scss';

// For Material demo import Material.scss
// import './assets/scss/Material.scss';
// For Material dark demo import Material-Dark.scss
// import './assets/scss/Material-Dark.scss';

// For Corporate demo import Corporate.scss
// import './assets/scss/Corporate.scss';
// For Corporate dark demo import Corporate-Dark.scss
// import './assets/scss/Corporate-Dark.scss';

// configure fake backend
configureFakeBackend();

const App = () => {
    return <Routes />;
};

export default App;
