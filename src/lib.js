import * as chrono from 'chrono-node'

function NlpDates() {
  return {
    transformEs: function(description) {
      return chrono.es.parseDate(description)
    },
    transform: function(description) {
      return chrono.parseDate(description)
    }
  }
}

if (typeof window !== 'undefined') {
  window.NlpDates = NlpDates
}

export default NlpDates