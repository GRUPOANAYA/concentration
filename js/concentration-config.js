// Copyright 2002-2013, University of Colorado Boulder

/*
 * RequireJS configuration file for the 'Concentration' sim.
 * Paths are relative to the location of this file.
 *
 * @author Chris Malley
 */

require.config( {

  deps: [ 'concentration-main' ],

  paths: {

    // third-party libs
    text: '../../sherpa/text',

    // PhET plugins
    audio: '../../chipper/requirejs-plugins/audio',
    image: '../../chipper/requirejs-plugins/image',
    string: '../../chipper/requirejs-plugins/string',

    // PhET libs, uppercase names to identify them in require.js imports
    AXON: '../../axon/js',
    BRAND: '../../brand/js',
    DOT: '../../dot/js',
    JOIST: '../../joist/js',
    KITE: '../../kite/js',
    NITROGLYCERIN: '../../nitroglycerin/js',
    PHET_CORE: '../../phet-core/js',
    PHETCOMMON: '../../phetcommon/js',
    SCENERY: '../../scenery/js',
    SCENERY_PHET: '../../scenery-phet/js',
    SHERPA: '../../sherpa',
    SUN: '../../sun/js',
    VIBE: '../../vibe/js',

    // other sims
    BEERS_LAW_LAB: "../../beers-law-lab/js",

    // this sim
    CONCENTRATION: "."
  },

  // optional cache buster to make browser refresh load all included scripts, can be disabled with ?cacheBuster=false
  urlArgs: phet.phetcommon.getCacheBusterArgs()
} );
