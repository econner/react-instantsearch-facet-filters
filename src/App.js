import React, { Component } from 'react'

import { 
  InstantSearch,
  RefinementList
} from 'react-instantsearch/dom'

import 'instantsearch.css/themes/algolia.css';

export default class App extends Component {

  render () {

    let config = {
      algolia: {
        appId: '**** YOUR APP ID ****',
        searchApiKey: '**** YOUR API KEY ****',
        indexName: '**** YOUR INDEX NAME ****'
      }
    }

    return (
      <InstantSearch
          appId={config.algolia.appId}
          apiKey={config.algolia.searchApiKey}
          indexName={config.algolia.indexName}
        >
          <RefinementList attribute='**** YOUR ATTRIBUTE NAME ****' showMore={true} showMoreLimit={30} searchable={true} />
        </InstantSearch>
    )
  }
}