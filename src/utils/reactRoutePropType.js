import PropTypes from 'prop-types'

export const locationPropTypes = PropTypes.shape({
  hash: PropTypes.string.isRequired,
  key: PropTypes.string, // only in createBrowserHistory and createMemoryHistory
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  state: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]), // only in createBrowserHistory and createMemoryHistory
})

export const historyPropTypes = PropTypes.shape({
  action: PropTypes.oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
  block: PropTypes.func.isRequired,
  canGo: PropTypes.func, // only in createMemoryHistory
  createHref: PropTypes.func.isRequired,
  entries: PropTypes.arrayOf(locationPropTypes), // only in createMemoryHistory
  go: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  goForward: PropTypes.func.isRequired,
  index: PropTypes.number, // only in createMemoryHistory
  length: PropTypes.number,
  listen: PropTypes.func.isRequired,
  location: locationPropTypes.isRequired,
  push: PropTypes.func.isRequired,
  replace: PropTypes.func.isRequired,
})

export const matchPropTypes = PropTypes.shape({
  isExact: PropTypes.bool,
  params: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
})

const routeShape = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  sensitive: PropTypes.bool,
  component: PropTypes.func,
}
routeShape.routes = PropTypes.arrayOf(PropTypes.shape(routeShape))

export const routePropTypes = PropTypes.shape(routeShape)

export default {
  locationPropTypes,
  historyPropTypes,
  matchPropTypes,
  routePropTypes,
}
