'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gradients = {
  a_lost_memory: ['#DE6262', '#FFB88C'],
  ali: ['#ff4b1f', '#1fddff'],
  alihossein: ['#f7ff00', '#db36a4'],
  almost: ['#ddd6f3', '#faaca8'],
  amethyst: ['#9D50BB', '#6E48AA'],
  aqua_marine: ['#1A2980', '#26D0CE'],
  aqualicious: ['#50C9C3', '#96DEDA'],
  army: ['#414d0b', '#727a17'],
  ash: ['#606c88', '#3f4c6b'],
  aubergine: ['#AA076B', '#61045F'],
  autumn: ['#DAD299', '#B0DAB9'],
  azure_pop: ['#ef32d9', '#89fffd'],
  back_to_earth: ['#00C9FF', '#92FE9D'],
  back_to_the_future: ['#C02425', '#F0CB35'],
  behongo: ['#52c234', '#061700'],
  between_night_and_day: ['#2c3e50', '#3498db'],
  between_the_clouds: ['#73C8A9', '#373B44'],
  black_rose: ['#f4c4f3', '#fc67fa'],
  blood_red: ['#f85032', '#e73827'],
  bloody_mary: ['#FF512F', '#DD2476'],
  blurry_beach: ['#d53369', '#cbad6d'],
  blush: ['#B24592', '#F15F79'],
  bora_bora: ['#2BC0E4', '#EAECC6'],
  bourbon: ['#EC6F66', '#F3A183'],
  brady_brady_fun_fun: ['#00c3ff', '#ffff1c'],
  bright_vault: ['#00d2ff', '#928DAB'],
  calm_darya: ['#5f2c82', '#49a09d'],
  candy: ['#D3959B', '#BFE6BA'],
  cheer_up_emo_kid: ['#556270', '#FF6B6B'],
  cherry: ['#EB3349', '#F45C43'],
  cherryblossoms: ['#FBD3E9', '#BB377D'],
  christmas: ['#2F7336', '#AA3A38'],
  clear_sky: ['#005C97', '#363795'],
  clouds: ['#ECE9E6', '#FFFFFF'],
  colors_of_sky: ['#E0EAFC', '#CFDEF3'],
  cool_brown: ['#603813', '#b29f94'],
  cosmic_fusion: ['#ff00cc', '#333399'],
  crazy_orange_i: ['#D38312', '#A83279'],
  curiosity_blue: ['#525252', '#3d72b4'],
  dance_to_forget: ['#FF4E50', '#F9D423'],
  dania: ['#BE93C5', '#7BC6CC'],
  dark_knight: ['#BA8B02', '#181818'],
  dark_skies: ['#4B79A1', '#283E51'],
  dawn: ['#F3904F', '#3B4371'],
  day_tripper: ['#f857a6', '#ff5858'],
  decent: ['#4CA1AF', '#C4E0E5'],
  deep_purple: ['#673AB7', '#512DA8'],
  deep_sea_space: ['#2C3E50', '#4CA1AF'],
  deep_space: ['#000000', '#434343'],
  dirty_fog: ['#B993D6', '#8CA6DB'],
  disco: ['#4ECDC4', '#556270'],
  dracula: ['#DC2424', '#4A569D'],
  dusk: ['#ffd89b', '#19547b'],
  dusk_alt: ['#2C3E50', '#FD746C'],
  earthly: ['#649173', '#DBD5A4'],
  eds_sunset_gradient: ['#ff7e5f', '#feb47b'],
  eighties_purple: ['#41295a', '#2F0743'],
  electric_violet: ['#4776E6', '#8E54E9'],
  emerald_water: ['#348F50', '#56B4D3'],
  endless_river: ['#43cea2', '#185a9d'],
  facebook_messenger: ['#00c6ff', '#0072ff'],
  fifty_shades_of_grey: ['#bdc3c7', '#2c3e50'],
  firewatch: ['#cb2d3e', '#ef473a'],
  flickr: ['#ff0084', '#33001b'],
  forest: ['#5A3F37', '#2C7744'],
  forever_lost: ['#5D4157', '#A8CABA'],
  fresh_turboscent: ['#F1F2B5', '#135058'],
  friday: ['#83a4d4', '#b6fbff'],
  frost: ['#000428', '#004e92'],
  frozen: ['#403B4A', '#E7E9BB'],
  grapefruit_sunset: ['#e96443', '#904e95'],
  green_and_blue: ['#c2e59c', '#64b3f4'],
  green_beach: ['#02AAB0', '#00CDAC'],
  green_to_dark: ['#6A9113', '#141517'],
  haikus: ['#fd746c', '#ff9068'],
  harmonic_energy: ['#16A085', '#F4D03F'],
  hersheys: ['#1e130c', '#9a8478'],
  horizon: ['#003973', '#E5E5BE'],
  ibiza_sunset: ['#ee0979', '#ff6a00'],
  iiit_delhi: ['#808080', '#3fada8'],
  inbox: ['#457fca', '#5691c8'],
  influenza: ['#C04848', '#480048'],
  instagram: ['#517fa4', '#243949'],
  intuitive_purple: ['#DA22FF', '#9733EE'],
  jonquil: ['#FFEEEE', '#DDEFBB'],
  joomla: ['#1e3c72', '#2a5298'],
  juicy_orange: ['#FF8008', '#FFC837'],
  kashmir: ['#614385', '#516395'],
  koko_caramel: ['#D1913C', '#FFD194'],
  kyoto: ['#c21500', '#ffc500'],
  lemon_twist: ['#3CA55C', '#B5AC49'],
  light_orange: ['#FFB75E', '#ED8F03'],
  limeade: ['#A1FFCE', '#FAFFD1'],
  little_leaf: ['#76b852', '#8DC26F'],
  lizard: ['#304352', '#d7d2cc'],
  love_couple: ['#3a6186', '#89253e'],
  lush: ['#56ab2f', '#a8e063'],
  man_of_steel: ['#780206', '#061161'],
  mango_pulp: ['#F09819', '#EDDE5D'],
  mantle: ['#24C6DC', '#514A9D'],
  martini: ['#FDFC47', '#24FE41'],
  master_card: ['#f46b45', '#eea849'],
  mauve: ['#42275a', '#734b6d'],
  metallic_toad: ['#abbaab', '#ffffff'],
  miaka: ['#FC354C', '#0ABFBC'],
  miami_dolphins: ['#4DA0B0', '#D39D38'],
  midnight_city: ['#232526', '#414345'],
  mild: ['#67B26F', '#4ca2cd'],
  minimal_red: ['#F00000', '#DC281E'],
  minnesota_vikings: ['#5614B0', '#DBD65C'],
  mirage: ['#16222A', '#3A6073'],
  misty_meadow: ['#215f00', '#e4e4d9'],
  mojito: ['#1D976C', '#93F9B9'],
  moonrise: ['#DAE2F8', '#D6A4A4'],
  moor: ['#616161', '#9bc5c3'],
  moss: ['#134E5E', '#71B280'],
  mystic: ['#757F9A', '#D7DDE8'],
  namn: ['#a73737', '#7a2828'],
  neon_life: ['#B3FFAB', '#12FFF7'],
  nepal: ['#de6161', '#2657eb'],
  netflix: ['#8E0E00', '#1F1C18'],
  nighthawk: ['#2980b9', '#2c3e50'],
  noon_to_dusk: ['#ff6e7f', '#bfe9ff'],
  opa: ['#3D7EAA', '#FFE47A'],
  pale_wood: ['#eacda3', '#d6ae7b'],
  parklife: ['#ADD100', '#7B920A'],
  passion: ['#e53935', '#e35d5b'],
  pastel_orange_at_the_sun: ['#ffb347', '#ffcc33'],
  peach: ['#ED4264', '#FFEDBC'],
  petrichor: ['#666600', '#999966'],
  piglet: ['#ee9ca7', '#ffdde1'],
  pinky: ['#DD5E89', '#F7BB97'],
  pinot_noir: ['#4b6cb7', '#182848'],
  pizelex: ['#114357', '#F29492'],
  playing_with_reds: ['#D31027', '#EA384D'],
  politics: ['#2196f3', '#f44336'],
  poncho: ['#403A3E', '#BE5869'],
  portrait: ['#8e9eab', '#eef2f3'],
  predawn: ['#FFA17F', '#00223E'],
  purple_bliss: ['#360033', '#0b8793'],
  purple_paradise: ['#1D2B64', '#F8CDDA'],
  purple_white: ['#BA5370', '#F4E2D8'],
  purplin: ['#6a3093', '#a044ff'],
  red_mist: ['#000000', '#e74c3c'],
  red_ocean: ['#1D4350', '#A43931'],
  reef: ['#00d2ff', '#3a7bd5'],
  rose_water: ['#E55D87', '#5FC3E4'],
  royal: ['#141E30', '#243B55'],
  sage_persuasion: ['#CCCCB2', '#757519'],
  sea_blizz: ['#1CD8D2', '#93EDC7'],
  sea_weed: ['#4CB8C4', '#3CD3AD'],
  servquick: ['#485563', '#29323c'],
  shadow_night: ['#000000', '#53346D'],
  shahabi: ['#a80077', '#66ff00'],
  sherbert: ['#f79d00', '#64f38c'],
  shore: ['#70e1f5', '#ffd194'],
  shrimpy: ['#e43a15', '#e65245'],
  shroom_haze: ['#5C258D', '#4389A2'],
  sirius_tamed: ['#EFEFBB', '#D4D3DD'],
  snapchat: ['#fffc00', '#ffffff'],
  solid_vault: ['#3a7bd5', '#3a6073'],
  soundcloud: ['#fe8c00', '#f83600'],
  starfall: ['#F0C27B', '#4B1248'],
  steel_gray: ['#1F1C2C', '#928DAB'],
  stellar: ['#7474BF', '#348AC7'],
  sun_on_the_horizon: ['#fceabb', '#f8b500'],
  sunny_days: ['#EDE574', '#E1F5C4'],
  sunrise: ['#FF512F', '#F09819'],
  sunset: ['#0B486B', '#F56217'],
  superman: ['#0099F7', '#F11712'],
  suzy: ['#834d9b', '#d04ed6'],
  sweet_morning: ['#FF5F6D', '#FFC371'],
  sylvia: ['#ff4b1f', '#ff9068'],
  talking_to_mice_elf: ['#948E99', '#2E1437'],
  teal_love: ['#AAFFA9', '#11FFBD'],
  the_strain: ['#870000', '#190A05'],
  timber: ['#fc00ff', '#00dbde'],
  titanium: ['#283048', '#859398'],
  tranquil: ['#EECDA3', '#EF629F'],
  transfile: ['#16BFFD', '#CB3066'],
  turquoise_flow: ['#136a8a', '#267871'],
  twitch: ['#6441A5', '#2a0845'],
  ukraine: ['#004FF9', '#FFF94C'],
  vasily: ['#e9d362', '#333333'],
  venice_blue: ['#085078', '#85D8CE'],
  vine: ['#00bf8f', '#001510'],
  virgin: ['#C9FFBF', '#FFAFBD'],
  virgin_america: ['#7b4397', '#dc2430'],
  winter: ['#E6DADA', '#274046'],
  youtube: ['#e52d27', '#b31217']
};


var randomGradientName = function randomGradientName() {
  var keys = (0, _keys2.default)(gradients);
  var index = Math.floor(Math.random() * keys.length);
  return keys[index];
};

var LinearGRadient = function (_Component) {
  (0, _inherits3.default)(LinearGRadient, _Component);

  function LinearGRadient() {
    (0, _classCallCheck3.default)(this, LinearGRadient);
    return (0, _possibleConstructorReturn3.default)(this, (LinearGRadient.__proto__ || (0, _getPrototypeOf2.default)(LinearGRadient)).apply(this, arguments));
  }

  (0, _createClass3.default)(LinearGRadient, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          colors = _props.colors,
          components = _props.components,
          offsets = _props.offsets,
          rest = (0, _objectWithoutProperties3.default)(_props, ['name', 'colors', 'components', 'offsets']);


      var finalColors = colors || gradients[name || randomGradientName()];
      var numColors = finalColors.length;

      return _react2.default.createElement(
        components.linearGradient,
        rest,
        finalColors.map(function (color, i) {
          return _react2.default.createElement(components.stop, {
            key: color,
            stopColor: color
            // offset={offsets[i]}
            , offset: offsets[i] || 100 / numColors * i + '%'
          });
        })
      );
    }
  }]);
  return LinearGRadient;
}(_react.Component);

LinearGRadient.propTypes = {
  components: _propTypes2.default.shape({
    linearGradient: _propTypes2.default.node,
    stop: _propTypes2.default.node
  }),
  name: _propTypes2.default.oneOf((0, _keys2.default)(gradients)),
  colors: _propTypes2.default.array,
  offsets: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
LinearGRadient.defaultProps = {
  components: {
    linearGradient: 'linearGradient',
    stop: 'stop'
  },
  offsets: []
};
exports.default = LinearGRadient;