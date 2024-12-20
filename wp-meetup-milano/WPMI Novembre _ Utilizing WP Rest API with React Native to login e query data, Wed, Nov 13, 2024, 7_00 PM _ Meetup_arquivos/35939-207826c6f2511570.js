!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="904b90aa-b134-46ef-bd89-5fb44e5b5273",e._sentryDebugIdIdentifier="sentry-dbid-904b90aa-b134-46ef-bd89-5fb44e5b5273")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35939],{11024:function(e,t,n){"use strict";n.d(t,{$q:function(){return l},Sn:function(){return useEventSearchWithSeriesQuery}});var r=n(19278),o=n(76185),i=n(74596),a=n(62551);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let s={},l=i.Ps`
  query eventSearchWithSeries(
    $query: String!
    $lat: Float!
    $lon: Float!
    $startDateRange: DateTime
    $endDateRange: DateTime
    $eventType: EventType
    $radius: Float
    $isHappeningNow: Boolean
    $isStartingSoon: Boolean
    $categoryId: ID
    $topicCategoryId: ID
    $city: String
    $state: String
    $country: String
    $zip: String
    $sortField: KeywordSortField
    $first: Int
    $after: String
    $numberOfEventsForSeries: Int
    $seriesStartDate: Date
    $doConsolidateEvents: Boolean
    $dataConfiguration: String
  ) {
    results: eventSearch(
      filter: {
        query: $query
        lat: $lat
        lon: $lon
        startDateRange: $startDateRange
        endDateRange: $endDateRange
        eventType: $eventType
        radius: $radius
        isHappeningNow: $isHappeningNow
        isStartingSoon: $isStartingSoon
        categoryId: $categoryId
        topicCategoryId: $topicCategoryId
        city: $city
        state: $state
        country: $country
        zip: $zip
        doConsolidateEvents: $doConsolidateEvents
      }
      first: $first
      after: $after
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      edges {
        node {
          ...EventForFindPageSearchesWithSeries
          group {
            isNewGroup
            timezone
          }
          rsvpState
          series {
            events(numberOfEvents: $numberOfEventsForSeries, startDate: $seriesStartDate) {
              edges {
                node {
                  id
                  dateTime
                  isAttending
                  group {
                    urlname
                  }
                }
              }
            }
          }
        }
        metadata {
          recId
          recSource
        }
      }
    }
  }
  ${a.YI}
`;function useEventSearchWithSeriesQuery(e){let t=_objectSpread(_objectSpread({},s),e);return o.a(l,t)}},62551:function(e,t,n){"use strict";n.d(t,{Jp:function(){return v},KJ:function(){return m},LU:function(){return s},YI:function(){return p},br:function(){return a},iR:function(){return i},m8:function(){return l},mG:function(){return c},ok:function(){return g},pK:function(){return f},uQ:function(){return o},vN:function(){return d}});var r=n(74596);let o=r.Ps`
  fragment GroupsPageGroup2 on Group {
    id
    name
    link
    city
    urlname
    state
    country
    timezone
    urlname
    groupPhoto: keyGroupPhoto {
      id
      baseUrl
    }
    organizer {
      id
    }
    stepUpInfo {
      organizerNominees {
        id
      }
      closingDate
    }
  }
`,i=r.Ps`
  fragment EventDetails on Event {
    id
    title
    dateTime
    duration
    endTime
    going {
      totalCount
    }
    featuredEventPhoto {
      id
      source: highResUrl
    }
    eventType
    group {
      id
      name
      urlname
      isPrimaryOrganizer
      link
      isPrivate
      city
      state
      country
      timezone
      keyGroupPhoto {
        id
        source: highResUrl
      }
    }
    isSaved
    hosts: eventHosts {
      id: memberId
      name
    }
    eventUrl
    isAttending
    maxTickets
    venue {
      name
      address
      city
      state
      country
    }
    socialLabels
  }
`,a=r.Ps`
  fragment MemberSubscriptionDetails on MemberSubscription {
    subscriptionId
    status
    startDate
    renewDate
    endDate
    provider
    trialEndDate
    lastPayment {
      id
      date
    }
    plan {
      id
      amount
      billInterval
      billIntervalUnit
    }
  }
`,s=r.Ps`
  fragment AttendeesRsvp on Rsvp {
    id
    member {
      id
      name
      allowableActions
      memberPhoto {
        id
        baseUrl
      }
      profilePrivacy {
        showInterests
        whoCanContact
      }
      topics {
        edges {
          node {
            id
            name
          }
        }
      }
      commonTopics {
        totalCount
        edges {
          node {
            id
            name
          }
        }
      }
      reasonsForJoining
      isFamiliarFace
      hasWaitlistPriority
    }
    membership {
      role
      status
    }
    updated
    isHost
    isFirstEvent
    status
    payStatus
    guestsCount
    answer {
      text
    }
    actions
    event {
      guestsAllowed
      numberOfAllowedGuests
      isAttending
      maxTickets
      group {
        id
        link
      }
      feeSettings {
        amount
      }
    }
    venue {
      id
      venueType
    }
    isRsvpUnlocked
  }
`,l=r.Ps`
  fragment EventByIdForAttendees on Event {
    id
    title
    eventUrl
    dateTime
    endTime
    status
    eventType
    eventHosts {
      memberId
    }
    rsvpQuestions {
      text
    }
    actions
    venue {
      name
      address
    }
    venues {
      id
      venueType
      eventVenueOptions {
        goingCount
      }
    }
    canSeeAttendees
    rsvps(first: $first, after: $after, filter: $filter, sort: $sort) {
      totalCount
      yesCount
      noCount
      waitlistCount
      edges {
        node {
          ...AttendeesRsvp
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
      }
    }
    group {
      id
      isPrivate
      isMember
      isPrimaryOrganizer
      membershipMetadata {
        role
      }
      link
      urlname
      proNetwork {
        id
      }
      organizer {
        isStarterOrganizer
      }
    }
  }
  ${s}
`,c=r.Ps`
  fragment BuildMeetupGroupSearch on Group {
    id
    name
    link
    description
    link
    city
    state
    country
    isPrivate
    isNewGroup
    groupPhoto {
      id
      baseUrl
    }
    stats {
      memberCounts {
        all
      }
    }
  }
`,d=r.Ps`
  fragment Error on PayloadError {
    code
    message
    field
  }
`,u=r.Ps`
  fragment GroupForFindPageSearchesWithSeries on Group {
    id
    isNewGroup
    isPrivate
    membershipMetadata {
      role
    }
    keyGroupPhoto {
      baseUrl
      highResUrl
      id
    }
    name
    timezone
    urlname
  }
`,p=r.Ps`
  fragment EventForFindPageSearchesWithSeries on Event {
    dateTime
    description
    eventType
    eventUrl
    featuredEventPhoto {
      baseUrl
      highResUrl
      id
    }
    feeSettings {
      accepts
      currency
    }
    id
    isAttending
    isOnline
    isSaved
    covidPrecautions {
      venueType
    }
    group {
      ...GroupForFindPageSearchesWithSeries
    }
    maxTickets
    rsvps {
      totalCount
    }
    title
    venue {
      id
      name
      lat
      lon
      city
      state
      country
    }
    socialLabels
  }
  ${u}
`,v=r.Ps`
  fragment EventForGuestCard on Event {
    id
    title
    eventUrl
    eventType
    dateTime
    endTime
    featuredEventPhoto {
      baseUrl
      highResUrl
      id
    }
    isOnline
    going {
      totalCount
    }
    feeSettings {
      amount
      currency
      earlyBirdDiscount {
        amount
        daysBefore
        maximumQuantity
        discountTicketsRemaining
      }
    }
    group {
      id
      name
      timezone
      urlname
      groupPhoto {
        id
        baseUrl
      }
    }
    venues {
      id
      earlyBirdDiscount {
        amount
        daysBefore
        maximumQuantity
      }
      eventVenueOptions {
        goingCount
        feeSettings {
          amount
        }
      }
    }
  }
`,m=r.Ps`
  fragment GroupHomeEvent on Event {
    id
    title
    status
    featuredEventPhoto {
      baseUrl
      highResUrl
      id
    }
    description
    isOnline
    eventType
    venue {
      id
      name
      address
      city
      state
      country
    }
    isAttending
    eventUrl
    going {
      totalCount
    }
    dateTime
    endTime
    isFeatured
    group {
      id
      name
      timezone
    }
    actions
    isNetworkEvent
    rsvps {
      edges {
        node {
          id
          member {
            id
            name
            memberPhoto {
              id
              source: highResUrl
            }
          }
        }
      }
    }
    feeSettings {
      currency
      amount
    }
    rsvpSettings {
      rsvpsClosed
    }
    socialLabels
  }
`;r.Ps`
  fragment NewGroupSearch on Group {
    id
    name
    link
    urlname
    foundedDate
    groupPhoto {
      id
      baseUrl
    }
  }
`;let f=r.Ps`
  fragment PopularGroupSearch on Group {
    id
    name
    link
    stats {
      memberCounts {
        all
      }
    }
  }
`,g=r.Ps`
  fragment EventByIdPhotoAlbum on EventPhotoAlbum {
    id
    photoCount
    photoSample(number: $number) {
      id
      baseUrl
      highResUrl
    }
  }
`},9868:function(e,t,n){"use strict";n.d(t,{B0:function(){return l},lD:function(){return useGroupSearchQuery}});var r=n(19278),o=n(76185),i=n(74596),a=n(62551);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let s={},l=i.Ps`
  query groupSearch(
    $first: Int
    $after: String
    $query: String!
    $lat: Float!
    $lon: Float!
    $radius: Float
    $categoryId: ID
    $topicCategoryId: ID
    $city: String
    $state: String
    $country: String
    $zip: String
  ) {
    results: groupSearch(
      first: $first
      after: $after
      filter: {
        query: $query
        lat: $lat
        lon: $lon
        radius: $radius
        categoryId: $categoryId
        topicCategoryId: $topicCategoryId
        city: $city
        state: $state
        country: $country
        zip: $zip
      }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      edges {
        node {
          ...BuildMeetupGroupSearch
        }
        metadata {
          recId
          recSource
        }
      }
    }
  }
  ${a.mG}
`;function useGroupSearchQuery(e){let t=_objectSpread(_objectSpread({},s),e);return o.a(l,t)}},33986:function(e,t,n){"use strict";n.d(t,{BK:function(){return useRecommendedEventsWithSeriesQuery},iM:function(){return l}});var r=n(19278),o=n(76185),i=n(74596),a=n(62551);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let s={},l=i.Ps`
  query recommendedEventsWithSeries(
    $lat: Float!
    $lon: Float!
    $categoryId: ID
    $topicCategoryId: ID
    $startDateRange: String
    $endDateRange: String
    $first: Int
    $after: String
    $eventType: EventType
    $radius: Float
    $isHappeningNow: Boolean
    $isStartingSoon: Boolean
    $sortField: RecommendedEventsSortField
    $numberOfEventsForSeries: Int
    $seriesStartDate: Date
    $doConsolidateEvents: Boolean
    $doPromotePaypalEvents: Boolean
    $indexAlias: String
    $dataConfiguration: String
  ) {
    result: recommendedEvents(
      filter: {
        lat: $lat
        lon: $lon
        categoryId: $categoryId
        topicCategoryId: $topicCategoryId
        startDateRange: $startDateRange
        endDateRange: $endDateRange
        eventType: $eventType
        radius: $radius
        isHappeningNow: $isHappeningNow
        isStartingSoon: $isStartingSoon
        doConsolidateEvents: $doConsolidateEvents
        doPromotePaypalEvents: $doPromotePaypalEvents
        indexAlias: $indexAlias
      }
      first: $first
      after: $after
      sort: { sortField: $sortField }
      dataConfiguration: $dataConfiguration
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      edges {
        node {
          ...EventForFindPageSearchesWithSeries
          group {
            isNewGroup
            timezone
          }
          rsvpState
          series {
            events(numberOfEvents: $numberOfEventsForSeries, startDate: $seriesStartDate) {
              edges {
                node {
                  id
                  dateTime
                  isAttending
                  group {
                    urlname
                  }
                }
              }
            }
          }
        }
        metadata {
          recId
          recSource
        }
      }
    }
  }
  ${a.YI}
`;function useRecommendedEventsWithSeriesQuery(e){let t=_objectSpread(_objectSpread({},s),e);return o.a(l,t)}},45650:function(e,t,n){"use strict";n.d(t,{hE:function(){return useGetRecommendedGroupsQuery},jV:function(){return l}});var r=n(19278),o=n(76185),i=n(74596),a=n(62551);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let s={},l=i.Ps`
  query getRecommendedGroups(
    $lat: Float!
    $lon: Float!
    $categoryId: ID
    $topicCategoryId: ID
    $first: Int
    $after: String
    $radius: Int
    $visibility: GroupVisibility
    $indexAlias: String
  ) {
    results: recommendedGroups(
      filter: {
        lat: $lat
        lon: $lon
        categoryId: $categoryId
        topicCategoryId: $topicCategoryId
        radius: $radius
        visibility: $visibility
        indexAlias: $indexAlias
      }
      after: $after
      first: $first
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
      edges {
        node {
          ...BuildMeetupGroupSearch
        }
        metadata {
          recId
          recSource
        }
      }
    }
  }
  ${a.mG}
`;function useGetRecommendedGroupsQuery(e){let t=_objectSpread(_objectSpread({},s),e);return o.a(l,t)}},30943:function(e,t,n){"use strict";n.d(t,{Ee:function(){return d},GG:function(){return useGetSavedEventsLazyQuery},Kn:function(){return useGetSavedEventsDatesQuery}});var r=n(19278),o=n(76185),i=n(37787),a=n(74596),s=n(62551);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let l={},c=a.Ps`
  query getSavedEventsDates {
    self {
      id
      name
      savedEvents(first: 20) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            id
            dateTime
          }
        }
      }
    }
  }
`;function useGetSavedEventsDatesQuery(e){let t=_objectSpread(_objectSpread({},l),e);return o.a(c,t)}let d=a.Ps`
  query getSavedEvents($sort: SortOrder, $filter: SavedEventsFilter, $first: Int!, $after: String) {
    self {
      id
      name
      savedEvents(sort: $sort, filter: $filter, first: $first, after: $after) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          cursor
          rsvpState
          node {
            ...EventDetails
            description
            venue {
              id
              address
              city
              state
              country
              lat
              lat
              lon
              name
            }
          }
        }
      }
    }
  }
  ${s.iR}
`;function useGetSavedEventsLazyQuery(e){let t=_objectSpread(_objectSpread({},l),e);return i.t(d,t)}},36065:function(e,t,n){"use strict";n.d(t,{u:function(){return useEarlyBirdDiscount}});var r=n(47208),o=n(10640);let useEarlyBirdDiscount=e=>{let{earlyBirdDiscount:t}=(null==e?void 0:e.feeSettings)||{},{amount:n,daysBefore:i,maximumQuantity:a,discountTicketsRemaining:s,promotionEnds:l}=t||{},c=new Date(i>0?l:e.dateTime),d=(0,r.Z)(c,new Date),{earlyBirdDiscount:u,eventVenueOptions:p}=(0,o.tO)(null==e?void 0:e.venues)||{},{amount:v,daysBefore:m,maximumQuantity:f,discountTicketsRemaining:g,promotionEnds:b}=u||{},h=new Date(i>0?b:e.dateTime),y=(0,r.Z)(h,new Date),w=d&&!!(n>=0&&i>=0&&(!a||s)),j=y&&!!(v>=0&&m>=0&&(!f||g));return{isEarlyBirdDiscount:w,isOnlineEarlyBirdDiscount:j,isEarlyBirdDiscountFull:w||j,discountedSpotsLeft:s,onlineDiscountedSpotsLeft:g,discountedAmount:n,onlineDiscountedAmount:v,discountEndDate:c,onlineDiscountEndDate:h,onlineEventVenueOptions:p}}},10640:function(e,t,n){"use strict";n.d(t,{Gt:function(){return getOnlineVenueSettings},JP:function(){return isWaitlist},K9:function(){return showPayDuesButton},MK:function(){return showAttendButton},Un:function(){return showNotOpenButton},W:function(){return showRequestToJoinButton},YB:function(){return hasPositiveRsvpResponse},YC:function(){return showEditRsvpButton},cC:function(){return showCompleteRsvpButton},eJ:function(){return showJoinButton},fy:function(){return getEventStatuses},kd:function(){return showSaveButton},le:function(){return showIsHappeningButton},pH:function(){return showWaitlistButton},qz:function(){return removeQueryParamsFromRouter},tO:function(){return getOnlineVenue},w:function(){return showRequestedButton},wK:function(){return useRsvpQuestionsForm}});var r=n(19278),o=n(47208),i=n(37307),a=n(82691),s=n.n(a),l=n(50959),c=n(4267),d=n(43246),u=n(53933),p=n(9905),v=n(53301);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let getOnlineVenue=e=>null==e?void 0:e.find(e=>{let{id:t}=e;return"26906060"===t}),getOnlineVenueSettings=e=>{let t=null==e?void 0:e.find(e=>{let{id:t}=e;return"26906060"===t});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},(null==t?void 0:t.eventVenueOptions)||{})},getEventStatuses=e=>{var t,n,r;let{rsvpLimit:a,goingCount:l}=getOnlineVenueSettings(null==e?void 0:e.venues)||{},p=(null==e?void 0:e.going)-l,m=null==e?void 0:e.maxTickets,f=new Date,g=(0,o.Z)(f,(0,i.Z)(e.endTime)),b=(0,v.e)(e.dateTime,e.endTime),h=e.timeStatus===u.rV.Upcoming,y=e.status===u.N3.Cancelled||e.status===u.N3.CANCELLED||e.status===c.N3.Cancelled||e.status===c.N3.AutoschedCancelled||e.rsvpState===u.S5.Cancelled,w=e.status===u.N3.Draft||e.status===u.N3.DRAFT||e.status===c.N3.Pending||e.status===c.N3.Proposed||e.status===c.N3.Template||e.status===c.N3.Draft||e.status===c.N3.AutoschedDraft,j=e.status===u.N3.PUBLISHED||e.status===u.N3.Published||e.status===c.N3.Active||e.status===c.N3.Autosched,S=e.status===u.N3.Active||e.status===c.N3.Active,O=e.status===u.N3.Past||e.status===c.N3.AutoschedFinished||e.status===c.N3.Past||g,x=e.status===u.N3.Proposed,E=e.rsvpState===u.S5.Closed,P=e.eventType===d.tw.HYBRID,k=e.rsvpState===u.S5.Full||(P?l>=a&&p>=m&&!!a&&!!m:!!e.maxTickets&&e.going>=e.maxTickets),{rsvpOpenTime:C,rsvpCloseTime:_}=(null==e?void 0:e.rsvpSettings)||{},N=!s()(C)&&!s()(_),I=!!_&&(0,o.Z)(f,new Date(_)),D=!!C&&(0,o.Z)(new Date(C),f),$=(null==e?void 0:null===(t=e.feeSettings)||void 0===t?void 0:t.amount)!==0,T=(null==e?void 0:null===(n=e.group)||void 0===n?void 0:null===(r=n.membershipMetadata)||void 0===r?void 0:r.status)===u.UP.Blocked,R=(null==e?void 0:e.rsvpState)===u.S5.Dues,Z=[u.S5.Yes,u.S5.Waitlist].includes(e.rsvpState);return{isUpcoming:h,isCanceled:y,isDraft:w,isPublished:j,isActive:S,isPast:O,isProposed:x,isClosedForRsvp:E,isHappeningNow:b,isFull:k,isRsvpSettingsExists:N,isAfterRsvpCloseTime:I,isBeforeRsvpOpenTime:D,isPaid:$,isBanned:T,shouldPayDues:R,isHybridEvent:P,isEditRsvp:Z}},hasRsvpResponse=e=>!!e,isNotRequireMemberApproval=e=>e===u.Yc.Open,hasPositiveRsvpResponse=e=>hasRsvpResponse(e)&&(e===u.S5.Yes||e===u.S5.Waitlist),hasPositiveRsvpResponseByAttend=e=>hasRsvpResponse(e)&&(e===u.S5.Rsvp||e===u.S5.No||e===u.S5.JoinOpen||e===u.S5.Full),isWaitlist=(e,t,n)=>e===u.S5.Waitlist||!!n&&t&&e!==u.S5.Yes,isRSVPClosed=e=>e.isClosedForRsvp||e.isPast||e.isCanceled||e.isAfterRsvpCloseTime,isGroupAccessible=e=>{var t,n;return!(null!=e&&null!==(t=e.group)&&void 0!==t&&t.isPrivate)||!!(null!=e&&null!==(n=e.group)&&void 0!==n&&n.isMember)},isMainCondition=(e,t)=>{var n,r;return(isNotRequireMemberApproval(null==e?void 0:null===(n=e.group)||void 0===n?void 0:n.joinMode)||!!(null!=e&&null!==(r=e.group)&&void 0!==r&&r.isMember))&&isGroupAccessible(e)&&hasPositiveRsvpResponseByAttend(e.rsvpState)&&!isRSVPClosed(t)&&!t.isPast&&!t.isBanned},showRequestedButton=e=>e.rsvpState===u.S5.Requested,showPayDuesButton=e=>!e.isCanceled&&!e.isPast&&e.shouldPayDues,showCompleteRsvpButton=e=>e.rsvpState===u.S5.ExternalYes,showAttendButton=(e,t)=>isGroupAccessible(e)&&hasPositiveRsvpResponseByAttend(e.rsvpState)&&!isRSVPClosed(t)&&!t.isPast&&!t.isBanned&&(!t.isFull||(null==t?void 0:t.isHybridEvent)&&t.isFull),showNotOpenButton=(e,t)=>!showPayDuesButton(t)&&!showRequestedButton(e)&&isGroupAccessible(e)&&!t.isBanned&&!t.isPast&&(t.isClosedForRsvp||t.isAfterRsvpCloseTime||e.rsvpState===u.S5.NotOpenYet)&&!(e.eventType===d.tw.ONLINE&&t.isHappeningNow)&&!t.isCanceled&&(!t.isRsvpSettingsExists||t.isBeforeRsvpOpenTime),canJoinGroup=(e,t)=>{var n;return!(showRequestedButton(e)||showPayDuesButton(t)||(null==e?void 0:null===(n=e.group)||void 0===n?void 0:n.joinMode)===u.Yc.Closed||t.isBanned)},showSaveButton=(e,t,n)=>!(e.isHappeningNow||e.isPast||e.isRsvpSettingsExists&&e.isAfterRsvpCloseTime||!canJoinGroup(t,e)||t.isAttending)&&n,showWaitlistButton=(e,t)=>{var n,r;let o=(null==e?void 0:null===(n=e.feeSettings)||void 0===n?void 0:n.accepts)===u.XL.Paypal&&!!(null!=e&&null!==(r=e.feeSettings)&&void 0!==r&&r.required);return isMainCondition(e,t)&&t.isFull&&!o&&!t.isHappeningNow&&!t.isHybridEvent},showRequestToJoinButton=(e,t)=>{var n,r;return!isNotRequireMemberApproval(null==e?void 0:null===(n=e.group)||void 0===n?void 0:n.joinMode)&&!isRSVPClosed(t)&&!t.isBeforeRsvpOpenTime&&!(null!=e&&null!==(r=e.group)&&void 0!==r&&r.isMember)&&!t.isBanned&&!t.isPast&&(e.rsvpState===u.S5.JoinApproval||e.rsvpState===u.S5.JoinDuesApproval)},showJoinButton=(e,t)=>!showRequestedButton(e)&&!showPayDuesButton(t)&&!showRequestToJoinButton(e,t)&&!isGroupAccessible(e)&&!t.isPast,showIsHappeningButton=(e,t)=>!showRequestedButton(e)&&!showPayDuesButton(t)&&!t.isCanceled&&!t.isPast&&t.isHappeningNow&&t.isFull,showEditRsvpButton=e=>!e.isPast&&!e.isHappeningNow,removeQueryParamsFromRouter=(e,t)=>{t.forEach(t=>delete e.query[t]),e.replace({pathname:e.pathname,query:e.query},void 0,{shallow:!0})},useRsvpQuestionsForm=e=>{let{event:t,selectedEventType:n,isHybridEvent:r,onlineGuestLimit:o}=e,{settings:i}=(0,p.N)(),a=r?n===d.tw.PHYSICAL?t.guestsAllowed:!!o:t.guestsAllowed,s=a&&"mandatory"!==i.settings.encourage_guests_signup_variant,c=(0,l.useMemo)(()=>{var e,n,r,o;return{showProQuestions:!!(null!==(e=t.rsvpSurveySettings)&&void 0!==e&&e.requiresProQuestionnaire)&&!!(null!==(n=t.group)&&void 0!==n&&n.proNetwork),showEventQuestion:!!t.rsvpEventQuestion,showEmailRegistration:(null===(r=t.group)||void 0===r?void 0:null===(o=r.proNetwork)||void 0===o?void 0:o.isMemberEmailShared)===!1,showGuests:s}},[t,s]),u=!Object.values(c).some(e=>e);return{formSections:c,isFormEmpty:u,guestsAllowed:a}}},74609:function(e,t,n){"use strict";let r;n.d(t,{AS:function(){return u},C8:function(){return trackEventMapControlsClick},Ei:function(){return r},FF:function(){return g},cr:function(){return f},dv:function(){return v},eT:function(){return c},ge:function(){return d},hI:function(){return p},h_:function(){return pageTrackingId},rs:function(){return s},y8:function(){return l},zf:function(){return m}});var o,i=n(53933),a=n(47971);let s="find",l={events:"Find - Event Search",groups:"Find - Group Search"},c={resetFiltersClick:"resetFilters",eventSearchTabClick:"searchTab-events",groupSearchTabClick:"searchTab-groups",categoryFilterClick:"category-filter-drop-down"},d="categoryResults-eventCard",pageTrackingId=e=>e===i.RK.Groups?"findResults-GroupsSearch":"findResults-EventsSearch",u={all:"day-filter-any-day-option",startingSoon:"day-filter-starting-soon-option",today:"day-filter-today-option",tomorrow:"day-filter-tomorrow-option",thisWeek:"day-filter-this-week-option",thisWeekend:"day-filter-this-weekend-option",nextWeek:"day-filter-next-week-option",nextWeekend:"day-filter-next-weekend-option",custom:"day-filter-custom-filter-option"},p={all:"event-type-any-type-option",online:"event-type-online-option",inPerson:"event-type-in-person-option",indoor:"event-type-in-person-indoor-option",outdoor:"event-type-in-person-outdoor-option"},v={all:"event-distance-any-distance-option",twoMiles:"event-distance-2-miles-option",fiveMiles:"event-distance-5-miles-option",tenMiles:"event-distance-10-miles-option",twentyFiveMiles:"event-distance-25-miles-option",fiftyMiles:"event-distance-50-miles-option",hundredMiles:"event-distance-100-miles-option"},m={datetime:"sort-by-date-option",relevance:"sort-by-relevance-option"},f={shareOpen:"share-in-event-search-results",shareFacebook:"share-facebook-in-event-search-results",shareTwitter:"share-twitter-in-event-search-results",shareLinkedIn:"share-linkedin-in-event-search-results",shareEmail:"share-email-in-event-search-results",shareCopy:"share-copy-link-in-event-search-results"},g={expand:"eventSearchMap-browse-in-map",minimize:"eventSearchMap-minimizeButton",marker:"eventSearchMap-marker-click",markerResult:"eventSearchMap-markerDialogueResult-click",zoom:"eventSearchMap-zoomButton"},trackEventMapControlsClick=e=>{(0,a.ZP)({event:"gaEvent",eventCategory:s,eventLabel:e,eventAction:"click"})};(o=r||(r={})).FIND_EVENTS="find-events",o.FIND_GROUPS="find-groups"},12075:function(e,t,n){"use strict";n.d(t,{By:function(){return getGroupKeywordSearchQueryParams},Gg:function(){return sendNGAExperimentTrackingEvent},O:function(){return getEventListForPicoTracking},RM:function(){return filterByIndoorOutdoor},T9:function(){return getRecommendedGroupSearchQueryParams},Tj:function(){return getGroupRecommendationMetadata},Wc:function(){return getEventKeywordSearchWithSeriesQueryParams},qC:function(){return getRecommendedEventsWithSeriesQueryParams},tX:function(){return buildEventLinkWithRecommendation},ty:function(){return getGroupListForPicoTracking},yw:function(){return getEventRecommendationMetadata}});var r=n(19278),o=n(11024),i=n(9868);n(53933);var a=n(87373),s=n(12923);n(39570);var l=n(63763),c=n(83506),d=n(80960),u=n(50542),p=n(92618),v=n(33986),m=n(45650);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let getCommonEventAndGroupSearchQueryVariables=function(e){let{distance:t,categoryId:n}=e,{lat:r=a.lW,lon:o=a.T7,radius:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0;return{first:20,lat:r,lon:o,topicCategoryId:n,radius:(0,c.$6)({locale:s,distance:t})||i}},getCommonEventSearchWithSeriesQueryVariables=(e,t,n)=>{let{dateRange:r,customStartDate:o,customEndDate:i,eventType:a}=e,{begin:l,end:d}=(0,c.RY)(s.zO,s.G4,r,o,i),u=r===c.xq.STARTING_SOON.queryStringParam,p=getCommonEventAndGroupSearchQueryVariables(e,t,n);return _objectSpread(_objectSpread({},p),{},{startDateRange:l,endDateRange:d,isStartingSoon:u||void 0,eventType:(0,c.rS)(a),numberOfEventsForSeries:5,seriesStartDate:s.G4.split("T")[0]})},getCommonKeywordVariables=function(e){let{keywords:t=""}=e,{city:n,state:r,country:o,zip:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _objectSpread(_objectSpread(_objectSpread(_objectSpread({query:t},n&&{city:n}),r&&{state:r}),o&&{country:o}),i&&{zip:i})},getRecommendedEventsWithSeriesQueryParams=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{sortField:o}=e,i=getCommonEventSearchWithSeriesQueryVariables(e,t,n);return{query:v.iM,variables:_objectSpread(_objectSpread({},i),{},{sortField:(0,c.sv)(o),doConsolidateEvents:!0,doPromotePaypalEvents:!1},r),context:{uri:p.M}}},getEventKeywordSearchWithSeriesQueryParams=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{sortField:i}=e,a=getCommonEventSearchWithSeriesQueryVariables(e,t,n),s=getCommonKeywordVariables(e,t);return{query:o.$q,variables:_objectSpread(_objectSpread(_objectSpread({},a),s),{},{sortField:(0,c.nA)(i),doConsolidateEvents:!0},r),context:{uri:p.M}}},getRecommendedGroupSearchQueryParams=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=getCommonEventAndGroupSearchQueryVariables(e,t,n);return{query:m.jV,variables:_objectSpread(_objectSpread({},o),r),context:{uri:p.M}}},getGroupKeywordSearchQueryParams=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=getCommonEventAndGroupSearchQueryVariables(e,t,n),a=getCommonKeywordVariables(e,t);return{query:i.B0,variables:_objectSpread(_objectSpread(_objectSpread({},o),a),r),context:{uri:p.M}}},filterByIndoorOutdoor=(e,t)=>{if("indoor"!==t&&"outdoor"!==t)return e;let n=e.filter(e=>{var n,r;if("indoor"==t&&(null==e?void 0:null===(n=e.covidPrecautions)||void 0===n?void 0:n.venueType)=="INDOORS"||"outdoor"==t&&(null==e?void 0:null===(r=e.covidPrecautions)||void 0===r?void 0:r.venueType)=="OUTDOORS")return!0});return n},sendNGAExperimentTrackingEvent=(e,t,n)=>{let r=n||t.isNewGroup;t&&r&&t.id&&(0,d.q)(e,{chapterId:t.id})},getEventRecommendationMetadata=(e,t,n,r)=>{var o,i;return{id:(null===(o=e.metadata)||void 0===o?void 0:o.recId)??null,isKeywordSearch:t,origin:{hasAds:n,page:"find",url:window.location.href},searchFilters:_objectSpread({},r),source:(null===(i=e.metadata)||void 0===i?void 0:i.recSource)??null}},getGroupRecommendationMetadata=(e,t,n,r)=>{var o,i;return{id:(null===(o=e.metadata)||void 0===o?void 0:o.recId)??null,isKeywordSearch:t,origin:{hasAds:n,page:"find",url:window.location.href},searchFilters:_objectSpread({},r),source:(null===(i=e.metadata)||void 0===i?void 0:i.recSource)??null}},getEventListForPicoTracking=e=>e.map((e,t)=>{var n,r;return{eventId:e.id,rank:t,recommendation:{id:null==e?void 0:null===(n=e.metadata)||void 0===n?void 0:n.recId,source:null==e?void 0:null===(r=e.metadata)||void 0===r?void 0:r.recSource}}}),getGroupListForPicoTracking=e=>e.map((e,t)=>{var n,r;return{groupId:e.id,rank:t,recommendation:{id:null==e?void 0:null===(n=e.metadata)||void 0===n?void 0:n.recId,source:null==e?void 0:null===(r=e.metadata)||void 0===r?void 0:r.recSource}}}),buildEventLinkWithRecommendation=(e,t,n)=>{var r,o;let i=(0,l.d)(`${(0,u.mis)(e.eventUrl)}`,t),a=new URL(i);return null!=e&&null!==(r=e.metadata)&&void 0!==r&&r.recId&&null!=e&&null!==(o=e.metadata)&&void 0!==o&&o.recSource&&n?(a.searchParams.set("recId",e.metadata.recId),a.searchParams.set("recSource",e.metadata.recSource),a.searchParams.set("searchId",n),a.toString()):i}},16181:function(e,t,n){"use strict";n.d(t,{Ep:function(){return getFinalEventList},Lv:function(){return getHasNextPage},Qw:function(){return getFilterStates},UM:function(){return getPageInfo},_B:function(){return attachTypeToEvent},eG:function(){return mergeArrays},eY:function(){return getEndCursor},q1:function(){return getCombinedEvents},rc:function(){return getUpcomingEventsWithType},xw:function(){return getIsHostEventStatus},zN:function(){return s},zi:function(){return getFilteredHostEvents}});var r=n(19278),o=n(2600),i=n.n(o),a=n(43246);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let s=20;function attachTypeToEvent(e,t){return _objectSpread(_objectSpread({},e),{},{type:t})}function getFilterStates(e){if(!e)return{showPastEvents:!1,showUpcomingEvents:!1,showOrganizedEvents:!1,showSavedEvents:!1};let t=e[a.xw.PastEvents]??!1,n=e[a.xw.RSVPEvents]??!1,r=e[a.xw.OrganizingEvents]??!1,o=e[a.xw.SavedEvents]??!1;return{showPastEvents:t,showUpcomingEvents:n,showOrganizedEvents:r,showSavedEvents:o}}function mergeArrays(e,t){return[...e??[],...t??[]]}function getUpcomingEventsWithType(e,t){return e.data.self.upcomingEvents.edges.map(e=>attachTypeToEvent(e.node,t))}function getFilteredHostEvents(e,t){return e.filter(e=>{let{hosts:n}=e;return!!(null!=n&&n.some(e=>e.id===t))})}function getIsHostEventStatus(e,t){return null==e?void 0:e.some(e=>e.id===t)}function getFinalEventList(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e||0===e.length)return[];let n=[];n=t?e.sort((e,t)=>new Date(t.dateTime).getTime()-new Date(e.dateTime).getTime()):e.sort((e,t)=>new Date(e.dateTime).getTime()-new Date(t.dateTime).getTime());let r=i()(n,"id");return r}function getCombinedEvents(e,t){if(!t)return[];let n=[];return t.showPastEvents?[...e.pastEvents.events]:(t.showOrganizedEvents&&(n=[...n,...e.organizedEvents.events]),t.showUpcomingEvents&&(n=[...n,...e.rsvpEvents.events]),t.showSavedEvents&&(n=[...n,...e.savedEvents.events]),n)}function getHasNextPage(e,t){var n,r,o,i,a,s,l,c,d,u,p,v,m,f,g,b;if(!e||!t)return!1;let h=(null===(n=e.getMyRsvpsLazyQueryTuple[1].data)||void 0===n?void 0:null===(r=n.self)||void 0===r?void 0:null===(o=r.upcomingEvents)||void 0===o?void 0:null===(i=o.pageInfo)||void 0===i?void 0:i.hasNextPage)??!1,y=(null===(a=e.getSelfGroupEventsByMembershipStatusLeaderLazyQueryTuple[1].data)||void 0===a?void 0:null===(s=a.self)||void 0===s?void 0:null===(l=s.upcomingEvents)||void 0===l?void 0:null===(c=l.pageInfo)||void 0===c?void 0:c.hasNextPage)??!1,w=(null===(d=e.getYourEventsPastEventsLazyQueryTuple[1].data)||void 0===d?void 0:null===(u=d.self)||void 0===u?void 0:null===(p=u.pastEvents)||void 0===p?void 0:null===(v=p.pageInfo)||void 0===v?void 0:v.hasNextPage)??!1,j=(e.getSavedEventsLazyQueryTuple&&(null===(m=e.getSavedEventsLazyQueryTuple[1].data)||void 0===m?void 0:null===(f=m.self)||void 0===f?void 0:null===(g=f.savedEvents)||void 0===g?void 0:null===(b=g.pageInfo)||void 0===b?void 0:b.hasNextPage))??!1;return t.showPastEvents?w:!!t.showUpcomingEvents&&!!h||!!t.showOrganizedEvents&&!!y||!!t.showSavedEvents&&!!j}function getPageInfo(e){return e?{endCursor:e.hasNextPage?e.endCursor:"",hasNextPage:e.hasNextPage}:{endCursor:"",hasNextPage:!1}}function getEndCursor(e,t){return e?"":t}},22813:function(e,t,n){"use strict";n.d(t,{Z:function(){return AdditionaInfo}});var r=n(50959),o=n(53933),i=n(16181),a=n(4814),s=n(38282),l=n(19278),c=n(73193),d=n(80417),u=n(11527);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let p=(0,c.vU)({waitlisted:{id:"labels.waitlisted",defaultMessage:"Waitlisted"}});var Labels_WaitlistedLabel=()=>(0,u.jsx)("div",{className:"flex h-8 items-center rounded-lg bg-gray1 p-1 px-2","data-testid":"WaitlistedLabel",children:(0,u.jsx)("span",{className:"text-sm font-medium",children:(0,u.jsx)(d.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,l.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},p.waitlisted))})}),v=n(93670),m=n(52153),f=n(40164),g=n(25498);function LeaderLabel_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let b=(0,c.vU)({organizer:{id:"organizerLabel.organizer",defaultMessage:"Organizer"},eventHost:{id:"eventHostLabel.eventHost",defaultMessage:"Event host"}});var EventCard_LeaderLabel=e=>{let{isNewEventCard:t}=e;return(0,u.jsx)("span",{className:(0,a.Z)("ml-4 self-center rounded bg-merlot px-4 py-0.5 font-medium leading-normal text-white",{"text-sm md:ml-2.5 md:rounded-lg md:px-2 md:py-1.5":t,"max-h-6 text-xs":!t}),children:(0,u.jsx)(d.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?LeaderLabel_ownKeys(Object(n),!0).forEach(function(t){(0,l.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):LeaderLabel_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t?b.eventHost:b.organizer))})},h=n(80860),y=n(2355),AdditionaInfo=e=>{let{event:t,noFacePile:n,isShowSpotsLeft:l,containerName:c,isLoggedIn:d,isShowAttendingLabel:p,shareTrackingClickIds:b,isNewEventCard:w,userId:j,showSocialLabel:S,eventOrigin:O}=e,{dateTime:x,group:E,eventType:P,tickets:k,going:C,maxTickets:_,isAttending:N,rsvpState:I,hosts:D,socialLabels:$}=t,T=(0,y.Pk)(x),R=(0,y.Up)(x),Z=I===o.S5.Waitlist&&!R,M=(0,y.iD)({maxTickets:_,going:C}),B=(0,r.useMemo)(()=>(0,i.xw)(D,j),[D,j]),L=w?B:E.isOrganizer;return(0,u.jsxs)("div",{className:"flex h-full w-full items-end",children:[(0,u.jsxs)("div",{className:"flex w-full flex-col",children:[(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)(f.ZP,{going:C,spotsLeftCount:M,tickets:k,isTextLine:n||!k,isShowSpotsLeft:(0,y.xF)({isShowSpotsLeft:l,maxTickets:_,going:C}),isShowEventFullLabel:T&&!!_&&_<=C}),L&&(0,u.jsx)(EventCard_LeaderLabel,{isNewEventCard:w})]}),S&&(0,u.jsx)(h.Z,{socialLabels:$,className:(0,a.Z)("mt-2",{"mt-6":p&&(N||Z)})}),(0,u.jsx)(g.Z,{type:P,className:"mt-1 xs:p-0 md:hidden"}),p&&N&&(0,u.jsx)("div",{className:"mt-2 inline-block w-max lg:mt-4",children:(0,u.jsx)(s.Z,{isPast:R})}),p&&Z&&(0,u.jsx)("div",{className:"mt-2 inline-block w-max lg:mt-4",children:(0,u.jsx)(Labels_WaitlistedLabel,{})})]}),(0,u.jsxs)("div",{className:"z-10 flex h-8 items-center gap-3",children:[(0,u.jsx)(m.T,{title:t.title||"",link:t.eventUrl,groupName:E.name,containerName:c,source:o.RK.Events,trackingClickIds:b,eventOrigin:O,eventId:t.id}),d&&!R&&(0,u.jsx)(v.ZP,{id:t.id,title:t.title||"",isSaved:t.isSaved,containerName:c})]})]})}},73915:function(e,t,n){"use strict";var r=n(19278),o=n(73193),i=n(80417),a=n(39025),s=n(4814),l=n(11527);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let c=(0,o.vU)({groupName:{id:"eventCardGroup.groupName",defaultMessage:"Group name"},isNewGroup:{id:"eventCardGroup.isNewGroup",defaultMessage:"New Group"}});t.Z=e=>{let{groupName:t,groupLocation:n,isNewGroup:r,className:o}=e;return t?(0,l.jsxs)("div",{className:(0,s.Z)("w-full  text-sm ",o),children:[(0,l.jsxs)("p",{className:"hidden text-gray6 md:line-clamp-1",children:[(0,l.jsxs)("span",{className:a.O,children:[(0,l.jsx)(i.Z,_objectSpread({},c.groupName)),":"]}),[t,n].filter(Boolean).join(" • ")]}),r&&(0,l.jsx)("p",{className:"hidden text-viridian md:line-clamp-1 ",children:(0,l.jsx)(i.Z,_objectSpread({},c.isNewGroup))}),(0,l.jsxs)("p",{className:"line-clamp-1 md:hidden",children:[(0,l.jsxs)("span",{className:a.O,children:[(0,l.jsx)(i.Z,_objectSpread({},c.groupName)),":"]}),t]}),(0,l.jsx)("p",{className:"line-clamp-1 md:hidden",children:n}),r&&(0,l.jsx)("p",{className:"pt-[2px] text-viridian line-clamp-1 md:hidden",children:(0,l.jsx)(i.Z,_objectSpread({},c.isNewGroup))})]}):null}},83545:function(e,t,n){"use strict";var r=n(19278),o=n(13444),i=n.n(o),a=n(73193),s=n(80417),l=n(4814),c=n(59297),d=n(11527);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let u=i()(()=>n.e(4671).then(n.bind(n,4671)),{ssr:!1,loadableGenerated:{webpack:()=>[4671]}}),p=(0,a.vU)({suggested:{id:"homePage.suggested",defaultMessage:"Suggested"}});t.Z=e=>{let{dateTime:t,isSuggestedDisplayed:n,isFindPage:o,eventTimeClassName:i,isRecurringEventsHeader:a}=e;return(0,d.jsxs)("div",{className:"flex flex-col-reverse justify-between md:flex-row md:items-center",children:[a?(0,d.jsx)(u,{}):(0,d.jsx)(c.EventTimeDisplay,{dateTime:t,isFindPage:o,className:(0,l.Z)("pb-1 pt-1 font-medium text-darkGold line-clamp-1 lg:line-clamp-2",i)}),n&&(0,d.jsx)("p",{className:"text-sm font-medium text-primary md:text-base",children:(0,d.jsx)(s.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},p.suggested))})]})}},7399:function(e,t,n){"use strict";var r=n(66616),o=n.n(r),i=n(4814),a=n(21351),s=n(89704),l=n(53880),c=n(41200),d=n(11527);t.Z=e=>{let{photo:t,title:n,imageSize:r,children:u,imageClassName:p,wrapperClassName:v,forceContainerHeight:m,priority:f}=e;return(0,d.jsxs)("div",{className:(0,i.Z)("relative",v),style:{height:m??r.maxHeight},children:[t?(0,d.jsx)(o(),{priority:f,src:(0,l.FS)((0,c.s)(t,r.maxWidth,r.maxHeight,"webp")),loader:s.XI,height:r.maxHeight,width:r.maxWidth,alt:n,className:(0,i.Z)("rounded-t-lg",p)}):(0,d.jsx)(o(),{priority:f,src:(0,a.qb)({groupNameOrUrl:n}),loader:s.XI,height:r.maxHeight,width:r.maxWidth,alt:n,className:(0,i.Z)("rounded-t-lg",p)}),u]})}},68327:function(e,t,n){"use strict";var r=n(4814),o=n(11527);t.Z=e=>{let{children:t,className:n,isFindPage:i}=e,a=(0,r.Z)("text-gray7 font-medium text-base",n);return i?(0,o.jsx)("h2",{className:a,children:t}):(0,o.jsx)("p",{className:a,children:t})}},28291:function(e,t,n){"use strict";var r=n(11527);t.Z=e=>{let{selectedItemOnMapRef:t,eventLink:n,dataEventLabel:o,clickIdContext:i,onCardClick:a,children:s}=e;return(0,r.jsx)("a",{ref:t,className:"w-full cursor-pointer hover:no-underline",href:n,"data-event-label":o??"Event card",id:i?`event-card-in-${i}`:void 0,onClick:a,children:s})}},86495:function(e,t,n){"use strict";n.d(t,{E:function(){return y}});var r=n(19278),o=n(50959),i=n(43114),a=n(74609),s=n(12075),l=n(64750),c=n(4814),d=n(22813),u=n(8856),p=n(73915),v=n(83545),m=n(7399),f=n(68327),g=n(28291),b=n(25498),h=n(11527);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let y="p-4 h-[170px]";t.Z=(0,o.memo)((0,o.forwardRef)((e,t)=>{let n;let{event:r,noFacePile:w,isShowSpotsLeft:j,containerName:S,isLoggedIn:O,showEventImageOnNarrowScreens:x,clickIdContext:E,isShowAttendingLabel:P,shareTrackingClickIds:k,isSuggestedDisplayed:C,isNewEventCard:_,dataEventLabel:N,isFindPage:I,eventLink:D,onClick:$,showSocialLabel:T}=e,{images:R,dateTime:Z,group:M,eventType:B,title:L}=r;null!=R&&R.length?[n]=R:n=null==M?void 0:M.groupPhoto;let{user:A}=(0,i.Z)("cache-first"),G=(0,o.useCallback)(()=>{null==$||$(),(0,s.Gg)(a.Ei.FIND_EVENTS,M,r.isNewGroup)},[M,r.isNewGroup,$]),F={selectedItemOnMapRef:t,eventLink:D,clickIdContext:E,onCardClick:G,dataEventLabel:N};return(0,h.jsxs)("div",{className:(0,c.Z)("relative flex h-full w-full flex-1 flex-col justify-between rounded-lg bg-white",y),children:[(0,h.jsxs)("div",{className:"flex flex-1 flex-row-reverse overflow-hidden md:flex-row",children:[(0,h.jsx)("div",{className:(0,c.Z)("ml-3 bg-transparent md:ml-0 md:mr-3",{"hidden md:block":!x},"d1n61gxy"),children:(0,h.jsx)(g.Z,_objectSpread(_objectSpread({},F),{},{children:(0,h.jsx)(m.Z,{wrapperClassName:"overflow-hidden bg-transparent w-full",imageClassName:"rounded-lg w-full absolute top-0 left-0 object-contain object-center",photo:n,title:L||"",imageSize:{maxWidth:Math.round(u.Hg),maxHeight:u.gQ},forceContainerHeight:u.xp,children:(0,h.jsx)(b.Z,{type:B,className:"absolute left-2 right-2 top-2 hidden md:flex"})})}))}),(0,h.jsxs)("div",{className:"w-full overflow-hidden",children:[(0,h.jsxs)(g.Z,_objectSpread(_objectSpread({},F),{},{children:[(0,h.jsx)(v.Z,{isFindPage:I,dateTime:Z,isSuggestedDisplayed:C}),(0,h.jsx)(f.Z,{isFindPage:I,className:"pb-1 pt-0 line-clamp-2 lg:line-clamp-3",children:L||""}),(0,h.jsx)(p.Z,{className:"mx-auto mb-2 line-clamp-2 md:mb-4 lg:line-clamp-3",groupName:null==M?void 0:M.name,isNewGroup:null==M?void 0:M.isNewGroup})]})),(0,h.jsx)(l.ZP,{noRuntimeRender:!0,greaterThanOrEqual:"sm",children:(0,h.jsx)(d.Z,{containerName:S,event:r,isShowAttendingLabel:P,isLoggedIn:O,isShowSpotsLeft:j,noFacePile:w,shareTrackingClickIds:k,isNewEventCard:_,userId:null==A?void 0:A.id,showSocialLabel:T})})]})]}),(0,h.jsx)(l.ZP,{noRuntimeRender:!0,lessThan:"sm",children:(0,h.jsx)(d.Z,{containerName:S,event:r,isShowAttendingLabel:P,isLoggedIn:O,isShowSpotsLeft:j,noFacePile:w,shareTrackingClickIds:k,isNewEventCard:_,userId:null==A?void 0:A.id,showSocialLabel:T})})]})})),n(44049)},80860:function(e,t,n){"use strict";var r=n(19278),o=n(73193),i=n(80417),a=n(52374),s=n(4267),l=n(4814),c=n(11527);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let d=(0,o.vU)({connectionGoing:{id:"eventCard.socialLabel.connectionGoing",defaultMessage:"Connection going"}}),u=[s.kx.ConnectionAttending,s.kx.PeopleToMeet],ConnectionGoingLabel=e=>{let{className:t}=e;return(0,c.jsxs)("div",{className:(0,l.Z)("ds-font-tiny-medium flex max-w-[fit-content] gap-x-2 rounded-lg bg-ds-mustard100 py-1 px-2 text-ds-neutral600",t),children:[(0,c.jsx)(a.ZP,{icon:"connections",size:16,outline:!0}),(0,c.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},d.connectionGoing))]})};t.Z=e=>{let{socialLabels:t=[],className:n}=e,[r]=null==t?void 0:t.sort((e,t)=>u.indexOf(e)-u.indexOf(t));return r===s.kx.ConnectionAttending?(0,c.jsx)(ConnectionGoingLabel,{className:n}):null}},35939:function(e,t,n){"use strict";n.d(t,{Z:function(){return es}});var r=n(50959),o=n(19278),i=n(43246),a=n(4814),s=n(47210),l=n(53933),c=n(74609),d=n(12075),u=n(93670),p=n(44475),v=n(8856),m=n(40164),f=n(73915),g=n(83545),b=n(7399),h=n(68327),y=n(25498),w=n(2355),j=n(11527),S=(0,r.memo)((0,r.forwardRef)((e,t)=>{let n;let{event:o,isLoggedIn:i,containerName:s,noFacePile:S,isShowSpotsLeft:O,showEventTypeTag:x=!0,cardClassNames:E={},clickIdContext:P,eventsShelfQueryLimit:k,shareTrackingClickIds:C,isSuggestedDisplayed:_,dataEventLabel:N,isSimplifiedColumn:I,eventLink:D,eventOrigin:$}=e,{images:T,dateTime:R,group:Z,eventType:M,title:B,tickets:L,going:A,maxTickets:G}=o;T.length?[n]=T:n=null==Z?void 0:Z.groupPhoto;let F=I?v.pC:v.GK,U=(0,w.Pk)(R),K=(0,r.useCallback)(()=>{(0,d.Gg)(c.Ei.FIND_EVENTS,Z,o.isNewGroup)},[Z,o.isNewGroup]);return(0,j.jsx)("a",{ref:t,className:(0,a.Z)("inline w-full cursor-pointer hover:no-underline",E.wrapperClassName),"data-event-label":N??"Event card",href:D,id:P?`event-card-in-${P}`:void 0,onClick:K,children:(0,j.jsxs)("div",{className:"flex h-full w-full flex-col",children:[(0,j.jsx)(b.Z,{wrapperClassName:"bg-gray1",photo:n,title:B||"",imageSize:{maxWidth:F,maxHeight:Math.round(F/v.YC)},imageClassName:"h-full",children:x&&(0,j.jsx)(y.Z,{type:M,className:"absolute left-2 top-2"})}),(0,j.jsxs)("div",{className:(0,a.Z)("flex h-full w-full flex-col justify-between p-3",E.textBlockClassName),children:[(0,j.jsxs)("div",{className:"overflow-hidden",children:[(0,j.jsx)(g.Z,{dateTime:R,isSuggestedDisplayed:_}),(0,j.jsx)(h.Z,{className:(0,a.Z)("pb-1 pt-0 line-clamp-3",E.titleClassName),children:B||""}),(0,j.jsx)(f.Z,{className:"mx-auto my-2",groupName:null==Z?void 0:Z.name,isNewGroup:null==Z?void 0:Z.isNewGroup})]}),(0,j.jsxs)("div",{className:"flex w-full justify-between",children:[(0,j.jsx)(m.ZP,{going:A??0,spotsLeftCount:(0,w.iD)({maxTickets:G,going:A}),tickets:L,isTextLine:S||!L,isShowSpotsLeft:O,isShowEventFullLabel:U}),!I&&(0,j.jsxs)("div",{className:"flex space-x-2",children:[(0,j.jsx)(p.Z,{title:o.title||"",link:o.eventUrl,groupName:Z.name,containerName:s,source:l.RK.Events,trackingClickIds:C,eventOrigin:$,eventId:o.id}),i&&(0,j.jsx)(u.ZP,{id:o.id,isSaved:o.isSaved,containerName:s,eventsShelfQueryLimit:k,useCache:!0})]})]})]})]})})})),O=n(36122),x=n(80417),E=n(36065),P=n(10640),k=n(34014),C=n(52374),_=n(20551),N=n(73193);let I=(0,N.vU)({eventHostedBy:{id:"eventCard.hostedBy",defaultMessage:"Hosted by"},eventGoing:{id:"eventCard.going",defaultMessage:"{NUMBER} going"},eventGoingBeFirst:{id:"eventCard.going.beFirst",defaultMessage:"Be the first"},eventPriceFree:{id:"eventCard.price.free",defaultMessage:"Free"},eventPrice:{id:"eventCard.price",defaultMessage:"From {PRICE}"},onlineEventStartTime:{id:"eventCard.onlineEvent.startTime",defaultMessage:"Starting at {TIME}"},eventStartDayTime:{id:"eventCard.event.startDayTime",defaultMessage:"{WEEKDAY} at {TIME}"},calendarIconAltText:{id:"eventCard.calendarIcon.alt",defaultMessage:"date and time"},checkIconAltText:{id:"eventCard.checkIcon.alt",defaultMessage:"going"},ticketIconAltText:{id:"eventCard.ticketIcon.alt",defaultMessage:"cost"}});function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var EventCard_EventCardFee=e=>{let{amount:t,currency:n,classNames:r,altText:o}=e;return(0,j.jsxs)("div",{className:(0,a.Z)("flex items-center space-x-1.5 text-gray7",r),children:[(0,j.jsx)(C.ZP,{icon:"ticket",size:20,outline:!0,svgClassName:"text-gray6",alt:o}),(0,j.jsx)("span",{className:"inline",children:t&&n?(0,j.jsx)(x.Z,_objectSpread(_objectSpread({},I.eventPrice),{},{values:{PRICE:(0,j.jsx)(_.Z,{amount:t,currency:n})}})):(0,j.jsx)(x.Z,_objectSpread({},I.eventPriceFree))})]})};function EventCardGoing_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function EventCardGoing_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?EventCardGoing_ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):EventCardGoing_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var EventCard_EventCardGoing=e=>{let{going:t,classNames:n,altText:r}=e,o=`${t}`;if(t>=1e3){let e=(Math.floor(t/100)/10).toFixed(1);e=e.endsWith("0")?Number(e).toFixed(0):e,o=`${e}k`}return(0,j.jsxs)("div",{className:(0,a.Z)("flex items-center space-x-1.5 text-gray7",n),children:[(0,j.jsx)(C.ZP,{icon:"check-2",size:20,outline:!0,svgClassName:"text-gray6",alt:r}),(0,j.jsx)("span",{children:t?(0,j.jsx)(x.Z,EventCardGoing_objectSpread(EventCardGoing_objectSpread({},I.eventGoing),{},{values:{NUMBER:o}})):(0,j.jsx)(x.Z,EventCardGoing_objectSpread({},I.eventGoingBeFirst))})]})},D=n(59297),EventCard_EventCardTime=e=>{let{dateTime:t,timeZone:n,altText:r}=e;return(0,j.jsxs)("div",{className:"flex items-center space-x-1.5 text-gray7",children:[(0,j.jsx)(C.ZP,{icon:"calendar",size:20,outline:!0,svgClassName:"text-gray6",alt:r}),(0,j.jsx)(D.EventTimeDisplay,{dateTime:t,timeZone:n})]})},$=n(27918);function GuestCardView_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let getImageMaxWidth=(e,t,n)=>n&&n.maxWidth?n.maxWidth:e||t?v.an:v.bb,getImageMaxHeight=(e,t,n)=>e||t?Math.round(n/v.YC):v.Yf;var T=(0,r.memo)(e=>{let t,{event:n,clickIdContext:r,dataEventLabel:s,timeZone:l,eventLink:c,imageSize:d,layout:u=$.A.Adaptive}=e,{images:p,dateTime:v,group:m,title:f,feeSettings:g,eventType:h,venues:w}=n,{smd:S}=(0,k.Z)(),C=(0,O.Z)(),{isEarlyBirdDiscount:_,discountedAmount:N,isEarlyBirdDiscountFull:D,onlineDiscountedAmount:T}=(0,E.u)(n),{feeSettings:R}=(0,P.Gt)(w),Z=null==g?void 0:g.amount;if(_&&(Z=N),h===i.tw.HYBRID&&(Z=null!=g&&g.amount&&null!=R&&R.amount?Math.min(null==g?void 0:g.amount,null==R?void 0:R.amount):null,D)){let e=N||(null==g?void 0:g.amount),t=T||(null==R?void 0:R.amount);Z=e&&t?Math.min(e,t):null}null!=p&&p.length?[t]=p:t=null==m?void 0:m.groupPhoto;let M=u===$.A.Column,B=getImageMaxWidth(S,M,d),L=getImageMaxHeight(S,M,B);return(0,j.jsx)("a",{className:"group relative inline w-full cursor-pointer hover:no-underline",href:c,"data-event-label":s??"Event card",id:r?`event-card-in-${r}`:void 0,children:(0,j.jsxs)("div",{className:(0,a.Z)("flex h-full w-full flex-row smd:flex-col smd:flex-col-reverse",{"xs:flex-col xs:flex-col-reverse":M}),children:[(0,j.jsxs)("div",{className:(0,a.Z)("grow space-y-2 pr-4 smd:mt-3",{"xs:mt-3":M}),children:[(0,j.jsx)("h3",{className:(0,a.Z)("text-lg font-semibold leading-6 line-clamp-4 group-hover:underline smd:text-xl smd:leading-6",{"xs:text-xl xs:leading-6":M},"h1lk27w4"),children:f||""}),(0,j.jsxs)("p",{className:"text-sm font-medium text-gray6 line-clamp-2",children:[(0,j.jsx)(x.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?GuestCardView_ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):GuestCardView_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},I.eventHostedBy)),":\xa0",null==m?void 0:m.name]}),(0,j.jsx)("div",{children:(0,j.jsx)(EventCard_EventCardTime,{dateTime:v,timeZone:l,altText:C.formatMessage(I.calendarIconAltText)})}),(0,j.jsxs)("div",{className:"flex flex-wrap gap-x-4 gl:pt-1",children:[(0,j.jsx)(EventCard_EventCardGoing,{going:(null==n?void 0:n.going)||0,altText:C.formatMessage(I.checkIconAltText)}),(0,j.jsx)(EventCard_EventCardFee,{amount:Z,currency:null==g?void 0:g.currency,altText:C.formatMessage(I.ticketIconAltText)})]})]}),(0,j.jsx)("div",{className:(0,a.Z)("ml-3 bg-transparent smd:ml-0 gl:mr-0",{"xs:ml-0":M},"d1umy16x"),children:(0,j.jsx)(b.Z,{wrapperClassName:"overflow-hidden bg-transparent w-full",imageClassName:"rounded-lg w-full h-full absolute top-0 left-0 object-cover object-center group-hover:opacity-80",photo:t,title:f||"",imageSize:{maxWidth:B,maxHeight:L},children:(0,j.jsx)(y.Z,{type:h,className:(0,a.Z)("absolute left-2 right-2 top-2 hidden smd:flex",{"xs:flex":M})})})})]})})});n(86611);var R=n(86495),Z=(0,r.memo)((0,r.forwardRef)(e=>{let t;let{event:n}=e,{images:r,dateTime:o,group:i,title:s}=n;return null!=r&&r.length?[t]=r:t=null==i?void 0:i.groupPhoto,(0,j.jsxs)("div",{className:"flex w-full flex-1 flex-row",children:[(0,j.jsx)("div",{className:(0,a.Z)("mr-4 hidden overflow-hidden md:block","d1v7zmlk"),children:(0,j.jsx)(b.Z,{wrapperClassName:"w-full",imageClassName:"rounded-lg h-full object-cover object-center",photo:t,title:s||"",imageSize:{maxWidth:84,maxHeight:63}})}),(0,j.jsxs)("div",{className:"w-full overflow-hidden",children:[(0,j.jsx)(h.Z,{className:(0,a.Z)("mb-1 font-medium line-clamp-3 md:mb-1.5","e6v85t4"),children:s||""}),(0,j.jsx)(D.EventTimeDisplay,{dateTime:o,className:(0,a.Z)("font-medium text-gray6 line-clamp-1 lg:line-clamp-2","e1q889kb")})]})]})}));n(95552);var M=n(13444),B=n.n(M),L=n(43114),A=n(64750),G=n(22813),F=n(28291);function RowView_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function RowView_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?RowView_ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):RowView_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let U=B()(()=>Promise.all([n.e(1127),n.e(55602)]).then(n.bind(n,55602)),{ssr:!1,loadableGenerated:{webpack:()=>[55602]}});var K=(0,r.memo)((0,r.forwardRef)((e,t)=>{var n,o,i,s;let l;let{event:u,noFacePile:p,isShowSpotsLeft:m,containerName:w,isLoggedIn:S,showEventImageOnNarrowScreens:O,clickIdContext:x,isShowAttendingLabel:E,shareTrackingClickIds:P,isSuggestedDisplayed:k,isNewEventCard:C,dataEventLabel:_,isFindPage:N,isAboveFold:I,eventLink:D,isRecurringEvents:$,locale:T,onClick:R,showSocialLabel:Z,eventOrigin:M}=e,{dateTime:B,group:K,eventType:z,series:V,title:H,images:W}=u;null!=W&&W.length?[l]=W:l=u.featuredEventPhoto?u.featuredEventPhoto:null!==(n=u.group)&&void 0!==n&&n.keyGroupPhoto?null===(s=u.group)||void 0===s?void 0:s.keyGroupPhoto:null==K?void 0:K.groupPhoto;let{user:Q}=(0,L.Z)("cache-first"),q=(K.state||K.country||"").toUpperCase(),Y=[K.city,q].filter(Boolean).join(", "),J=(0,r.useCallback)(()=>{null==R||R(),(0,d.Gg)(c.Ei.FIND_EVENTS,K,u.isNewGroup??K.isNewGroup)},[u.isNewGroup,K,R]),X=(0,a.Z)({"h-8 mt-1.5 sm:h-0 sm:mt-0":!S}),ee=(0,a.Z)({"h-0 sm:h-8":!S}),et={selectedItemOnMapRef:t,eventLink:D,clickIdContext:x,onCardClick:J,dataEventLabel:_},en=RowView_objectSpread(RowView_objectSpread({},u),{},{going:u.going??(null===(o=u.rsvps)||void 0===o?void 0:o.totalCount),group:RowView_objectSpread(RowView_objectSpread({},u.group),{},{isOrganizer:u.group.isOrganizer??(null===(i=u.group.metadata)||void 0===i?void 0:i.match("ORGANIZER"))})});return(0,j.jsxs)("div",{className:"relative flex w-full flex-col",children:[(0,j.jsxs)("div",{className:"flex flex-1 flex-row-reverse overflow-hidden md:flex-row",children:[(0,j.jsx)("div",{className:(0,a.Z)("ml-3 bg-transparent md:ml-0 md:mr-3",{"hidden md:block":!O},"d15a685b"),children:(0,j.jsx)(F.Z,RowView_objectSpread(RowView_objectSpread({},et),{},{children:(0,j.jsx)(b.Z,{wrapperClassName:"overflow-hidden bg-transparent w-full",imageClassName:"rounded-lg w-full absolute top-0 left-0 object-contain object-center",photo:l,title:H||"",priority:I,imageSize:{maxWidth:Math.round(v.Hg),maxHeight:v.gQ},forceContainerHeight:$?v.qU:null,children:(0,j.jsx)(y.Z,{type:z,className:"absolute left-2 right-2 top-2 hidden md:flex"})})}))}),(0,j.jsxs)("div",{className:"w-full overflow-hidden",children:[(0,j.jsxs)(F.Z,RowView_objectSpread(RowView_objectSpread({},et),{},{children:[(0,j.jsx)(g.Z,{isFindPage:N,dateTime:B,isSuggestedDisplayed:k,isRecurringEventsHeader:$}),(0,j.jsx)(h.Z,{isFindPage:N,className:"pb-1 pt-0 line-clamp-3",children:H||""}),(0,j.jsx)(f.Z,{className:"mx-auto mb-2 md:mb-4",groupName:null==K?void 0:K.name,groupLocation:Y,isNewGroup:null==K?void 0:K.isNewGroup})]})),!$&&(0,j.jsx)(A.ZP,{noRuntimeRender:!0,greaterThanOrEqual:"sm",className:ee,children:(0,j.jsx)(G.Z,{containerName:w,event:en,isShowAttendingLabel:E,isLoggedIn:S,isShowSpotsLeft:m,noFacePile:p,shareTrackingClickIds:P,isNewEventCard:C,userId:null==Q?void 0:Q.id,showSocialLabel:Z,eventOrigin:M})})]})]}),!$&&(0,j.jsx)(A.ZP,{noRuntimeRender:!0,lessThan:"sm",className:X,children:(0,j.jsx)(G.Z,{containerName:w,event:en,isShowAttendingLabel:E,isLoggedIn:S,isShowSpotsLeft:m,noFacePile:p,shareTrackingClickIds:P,isNewEventCard:C,userId:null==Q?void 0:Q.id,showSocialLabel:Z})}),$&&(0,j.jsx)(U,{eventData:V.events.edges,locale:T,timezone:u.timezone})]})}));n(23387);var z=n(48624),V=n(47971),H=n(2931),W=n(20316),Q=n(40209);function RowViewWithAttendButton_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let q=(0,N.vU)({eventAttend:{id:"eventCardWithAttend.eventAttend",defaultMessage:"Attend"},onlineEvent:{id:"eventCardWithAttend.onlineEvent",defaultMessage:"Online"}});var Y=(0,r.memo)((0,r.forwardRef)((e,t)=>{let n;let{event:i,isGroupEvent:s,eventLink:u}=e,{images:p,dateTime:y,group:w,eventType:S,title:O,going:E}=i;null!=p&&p.length?[n]=p:n=null==w?void 0:w.groupPhoto;let P=(S&&S===l.tw.PHYSICAL)??!1,k=(w.state||w.country||"").toUpperCase(),C=[w.city,k].filter(Boolean).join(", "),_=(0,r.useCallback)(()=>{let e=s?W.A.groupUpcomingEventCardClicked:W.A.suggestedEventCardClicked;(0,V.ZP)({event:"gaEvent",eventCategory:"EventFeedback",eventAction:"click",eventLabel:e}),(0,d.Gg)(c.Ei.FIND_EVENTS,w,i.isNewGroup)},[w,i.isNewGroup,s]);return(0,j.jsx)("a",{ref:t,className:"relative inline w-full cursor-pointer hover:no-underline",href:u,id:"event-card-in-rating-modal",onClick:_,children:(0,j.jsxs)("div",{className:"flex w-full flex-col",children:[(0,j.jsxs)("div",{className:"flex  overflow-hidden  md:flex-row",children:[(0,j.jsxs)("div",{className:"flex w-full flex-col overflow-hidden pr-2",children:[(0,j.jsx)(g.Z,{dateTime:y}),(0,j.jsx)(h.Z,{className:"pb-1 pt-0 line-clamp-3",children:O||""}),(0,j.jsx)(f.Z,{className:"mx-auto mb-2 md:mb-4",groupName:null==w?void 0:w.name})]}),(0,j.jsx)("div",{className:(0,a.Z)("mb-1 ml-3 bg-transparent md:ml-0 md:mr-3","d1efofxw"),children:(0,j.jsx)(b.Z,{wrapperClassName:"bg-transparent w-full",imageClassName:"rounded-lg w-full absolute top-0 left-0 object-contain object-center",photo:n,title:O||"",imageSize:{maxWidth:Math.round(v.Hg),maxHeight:v.gQ}})})]}),(0,j.jsxs)("div",{className:"mr-10 flex w-full flex-row items-center justify-between",children:[(0,j.jsx)(A.ZP,{className:"flex flex-col",noRuntimeRender:!0,children:P?(0,j.jsx)(Q.Z,{primaryText:(0,j.jsx)(m.EW,{count:E}),secondaryText:C,secondaryTextClassName:"text-gray6"}):(0,j.jsx)(Q.Z,{primaryText:(0,j.jsx)(m.EW,{count:E}),eventType:S})}),(0,j.jsx)(H.ZP,{variant:H.c7.SECONDARY,"data-event-label":z.LU.similarnearByAttend,className:(0,a.Z)("ds-font-small-medium h-8 py-1.5","batgi3y"),children:(0,j.jsx)(x.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?RowViewWithAttendButton_ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):RowViewWithAttendButton_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},q.eventAttend))})]})]})})}));n(17316);var J=n(30838),EventCard_EventCardAttend=e=>{let{buttonLabel:t,className:n,style:r}=e;return(0,j.jsx)(H.ZP,{type:"button",variant:H.c7.BORDERED_SECONDARY,className:n,style:r,children:t})};let X=(0,N.vU)({attend:{id:"textColumnView.attend",defaultMessage:"Attend"}});var ee=(0,r.memo)((0,r.forwardRef)((e,t)=>{let{event:n,noFacePile:o,isShowSpotsLeft:i,cardClassNames:s={},clickIdContext:l,dataEventLabel:u,eventLink:p}=e,{dateTime:v,group:b,title:y,tickets:S,going:x,maxTickets:E}=n,P=(0,O.Z)(),k=(0,w.Pk)(v),C=(0,r.useCallback)(()=>{(0,d.Gg)(c.Ei.FIND_EVENTS,b,n.isNewGroup)},[b,n.isNewGroup]);return(0,j.jsx)("a",{ref:t,className:(0,a.Z)("inline w-full cursor-pointer hover:no-underline",s.wrapperClassName),"data-event-label":u??"Event card",href:p,id:l?`event-card-in-${l}`:void 0,onClick:C,children:(0,j.jsx)("div",{className:"flex h-full w-full flex-col",children:(0,j.jsxs)("div",{className:(0,a.Z)("flex h-full w-full flex-col justify-between bg-white p-3",s.textBlockClassName),children:[(0,j.jsxs)("div",{className:"overflow-hidden",children:[(0,j.jsx)(g.Z,{dateTime:v,eventTimeClassName:"xs:text-viridian xs:py-2"}),(0,j.jsx)(h.Z,{className:(0,a.Z)("pb-1 pt-0 text-xl",s.titleClassName),children:y||""}),(0,j.jsx)(f.Z,{className:"mb-6",groupName:null==b?void 0:b.name,isNewGroup:null==b?void 0:b.isNewGroup}),(0,j.jsx)(J.c,{className:"text-sm",hideTime:!0,eventType:n.eventType,venue:n.venue})]}),(0,j.jsxs)("div",{className:"flex w-full justify-between",children:[(0,j.jsx)(m.ZP,{going:x??0,spotsLeftCount:(0,w.iD)({maxTickets:E,going:x}),tickets:S,isTextLine:o||!S,isShowSpotsLeft:i,isShowEventFullLabel:k}),(0,j.jsx)("div",{className:"flex space-x-2",children:(0,j.jsx)(EventCard_EventCardAttend,{buttonLabel:P.formatMessage(X.attend),className:"mb-2 font-medium",style:{padding:"6px 20px"}})})]})]})})})}));function EventCardView_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function EventCardView_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?EventCardView_ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):EventCardView_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let et=(0,a.Z)("flex-row justify-start rounded border border-gray2","c1u48s3d"),en=(0,a.Z)("w-full flex-row justify-start py-4 border-t border-gray3 md:pt-4 md:pb-5"),er=(0,a.Z)("w-full flex-row justify-start py-3 border-t border-gray3 md:pb-5"),eo=(0,a.Z)("w-full flex-row justify-start rounded-lg md:px-4 md:py-4","m14px31h"),ei=(0,a.Z)("flex-row justify-start","txmv3m7");var ea=(0,r.forwardRef)((e,t)=>{let n;let{event:r,theme:o,recommendationId:l,recommendationSource:c,dataElementName:d,cardWrapperClassName:u,isGroupEvent:p,showEventImageOnNarrowScreens:m,timeZone:f,isSimplifiedColumn:g,locale:b,eventOrigin:h}=e,y=r.type===i._0.RANKED;switch(o){case v.Yz.MapRow:n=(0,j.jsx)(R.Z,EventCardView_objectSpread(EventCardView_objectSpread({},e),{},{isSuggestedDisplayed:y}));break;case v.Yz.Column:n=(0,j.jsx)(S,EventCardView_objectSpread(EventCardView_objectSpread({},e),{},{isSuggestedDisplayed:y,isSimplifiedColumn:g,eventOrigin:h}));break;case v.Yz.Row:n=(0,j.jsx)(K,EventCardView_objectSpread(EventCardView_objectSpread({},e),{},{isSuggestedDisplayed:y,isRecurringEvents:!!r.series,locale:b}));break;case v.Yz.GuestCardView:n=(0,j.jsx)(T,EventCardView_objectSpread(EventCardView_objectSpread({},e),{},{isSuggestedDisplayed:y,timeZone:f}));break;case v.Yz.RowWithAttend:n=(0,j.jsx)(Y,EventCardView_objectSpread(EventCardView_objectSpread({},e),{},{isGroupEvent:p}));break;case v.Yz.TextColumn:n=(0,j.jsx)(ee,EventCardView_objectSpread(EventCardView_objectSpread({},e),{},{isSuggestedDisplayed:y}));break;case v.Yz.MinimalView:n=(0,j.jsx)(Z,EventCardView_objectSpread(EventCardView_objectSpread({},e),{},{showEventImageOnNarrowScreens:m}));break;default:n=(0,j.jsx)("div",{})}return(0,j.jsx)(s.Z,{ref:t,id:r.id,recommendationId:l??"",recommendationSource:c??"",dataElementName:d,className:(0,a.Z)({[en]:o===v.Yz.Row,[et]:o===v.Yz.Column&&!g,"flex-row justify-start rounded":o===v.Yz.Column&&g,[er]:o===v.Yz.RowWithAttend,"rounded-lg border border-white":o===v.Yz.MapRow,[ei]:o===v.Yz.TextColumn,[eo]:o===v.Yz.MinimalView,"xs:border-2 xs:border-viridian lg:px-5":t},u),children:n})});n(7328);var es=(0,r.memo)((0,r.forwardRef)((e,t)=>{let{event:n,theme:r,containerName:o,recommendationId:i,recommendationSource:a,noFacePile:s,isShowSpotsLeft:l,isLoggedIn:c,showEventTypeTag:d,cardWrapperClassName:u,cardClassNames:p,dataElementName:v,showEventImageOnNarrowScreens:m,clickIdContext:f,isShowAttendingLabel:g,eventsShelfQueryLimit:b,shareTrackingClickIds:h,isNewEventCard:y,dataEventLabel:w,isGroupEvent:S,isFindPage:O,timeZone:x,isSimplifiedColumn:E,isAboveFold:P,eventLink:k,locale:C,layout:_,imageSize:N,onClick:I,showSocialLabel:D,eventOrigin:$}=e;return(0,j.jsx)(ea,{ref:t,clickIdContext:f,event:n,theme:r,containerName:o,recommendationId:i??"",recommendationSource:a??"",dataElementName:v,isLoggedIn:c,noFacePile:s,isShowSpotsLeft:l,showEventTypeTag:d,cardWrapperClassName:u,cardClassNames:p,showEventImageOnNarrowScreens:m,isShowAttendingLabel:g,eventsShelfQueryLimit:b,shareTrackingClickIds:h,isNewEventCard:y,dataEventLabel:w,isFindPage:O,isAboveFold:P,isGroupEvent:S,timeZone:x,eventLink:k,isSimplifiedColumn:E,locale:C,layout:_,imageSize:N,onClick:I,showSocialLabel:D,eventOrigin:$})}))},27918:function(e,t,n){"use strict";var r;let o;n.d(t,{A:function(){return o}}),(r=o||(o={}))[r.Adaptive=0]="Adaptive",r[r.Row=1]="Row",r[r.Column=2]="Column"},20316:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});let r={eventFeedbackCardSeen:"event_home_feedback_card",starRatingClicked:"event_home_feedback_card_star_click",didNotGoClicked:"event_home_feedback_card_didnt_go_click",feedbackLeftCardSeen:"event_home_feedback_left_card",feedbackModalSeen:"feedback_modal",oneStarFeedback:"feedback_one_star_click",twoStarFeedback:"feedback_two_star_click",threeStarFeedback:"feedback_three_star_click",fourStarFeedback:"feedback_four_star_click",fiveStarFeedback:"feedback_five_star_click",tileClick:"feedback_tile_click",wouldAttendAgain:"feedback_yes_click",wouldNotAttendAgain:"feedback_no_click",inFreeformTextBox:" feedback_text_click",feedbackClosed:" feedback_close_click",feedbackSubmitted:"feedback_submit_click",dismissFeedbackCLicked:"feedback_close_discard_click",dismissFeedbackCanceled:"feedback_close_cancel_click",feedbackConfirmationModalSeen:"feedback_confirmation_modal",suggestedEventCardClicked:"feedback_confirmation_suggested_event_card_click",groupUpcomingEventCardClicked:"feedback_confirmation_upcoming_event_card_click",dismissFeedbackConfirmationModal:"feedback_confirmation_dismiss_click",feedbackConfirmationCloseModal:"feedback_confirmation_close_click",feedbackConfirmationPledgeClicked:"feedback_confirmation_pledge_click"}},41200:function(e,t,n){"use strict";n.d(t,{s:function(){return imageUrl}});var r=n(21351),o=n(89704),i=n(53880),a=n(11527);let imageUrl=function(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"jpg";return null!=e&&e.source?(0,i.pC)(e.source):null!=e&&e.highResUrl?(0,i.pC)(e.highResUrl):(0,i.oe)(null==e?void 0:e.baseUrl,null==e?void 0:e.id)?o.wm+(0,r.qb)({groupNameOrUrl:null==e?void 0:e.id},t>n):`${e.baseUrl}${e.id}/${Math.round(t)}x${Math.round(n)}.${a}`},makeSet=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"jpg";return[imageUrl(e,t,n,r),`${imageUrl(e,1.5*t,1.5*n,r)} 1.5x`,`${imageUrl(e,2*t,2*n,r)} 2x`].join(", ")};t.Z=e=>{let{image:t,width:n,height:r,critical:o=!1,className:i,alt:s,pictureClassName:l}=e;return(0,a.jsxs)("picture",{className:l,children:[(0,a.jsx)("source",{srcSet:makeSet(t,n,r,"webp"),type:"image/webp"}),(0,a.jsx)("source",{srcSet:makeSet(t,n,r,"jpg"),type:"image/jpeg"}),(0,a.jsx)("img",{src:imageUrl(t,n,r,"jpg"),width:n,height:r,alt:s,loading:o?"eager":"lazy",className:i})]})}},20551:function(e,t,n){"use strict";var r=n(50959),o=n(15065),i=n(13306),a=n(11527);let s=(0,r.memo)(e=>{let{amount:t,currency:n}=e,{locale:r}=(0,o.M)();return(0,a.jsx)(i.Z,{amount:t,locale:r,currency:n})});s.displayName="FormattedCurrency",t.Z=s},13306:function(e,t,n){"use strict";var r=n(19278),o=n(73193),i=n(11527);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let a={style:"currency",currency:"USD",minimumIntegerDigits:1,minimumFractionDigits:2,maximumFractionDigits:2},s=_objectSpread(_objectSpread({},a),{},{currencyDisplay:"symbol"}),l=_objectSpread(_objectSpread({},a),{},{currencyDisplay:"code"});t.Z=e=>{let{amount:t,currency:n,locale:r}=e,a="en-US"===r?_objectSpread({},s):_objectSpread({},l);return n&&(a.currency=n),(0,i.jsx)(o.BK,_objectSpread({value:t},a))}},38282:function(e,t,n){"use strict";var r=n(19278),o=n(73193),i=n(80417),a=n(52374),s=n(11527);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let l=(0,o.vU)({attending:{id:"homepage.upcomingEvent.attending",defaultMessage:"Attending"},attendingPast:{id:"homepage.upcomingEvent.attendingPast",defaultMessage:"Attended"}});t.Z=e=>{let{isPast:t}=e;return(0,s.jsxs)("div",{className:"flex h-8 items-center rounded-lg bg-gray1 p-1 px-2",children:[(0,s.jsx)(a.ZP,{icon:"check",size:23,svgClassName:"text-confirmGreen"}),(0,s.jsx)("span",{className:"ml-1 text-sm font-medium",children:(0,s.jsx)(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},t?l.attendingPast:l.attending))})]})}},93670:function(e,t,n){"use strict";n.d(t,{ZL:function(){return SaveEventButtonComponent},ZP:function(){return _}});var r=n(19278),o=n(61400),i=n(50959),a=n(73193),s=n(36122),l=n(11298),c=n(52374),d=n(30943),u=n(4267),p=n(61439),v=n(74596),m=n(10601);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let f={},g=v.Ps`
  mutation saveUnifiedEvent($input: SaveInput!) {
    saveUnifiedEvent(input: $input) {
      event {
        ...BuildMeetupEvent
      }
    }
  }
  ${m.bh}
`;function UnsaveUnifiedEvent_generated_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function UnsaveUnifiedEvent_generated_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?UnsaveUnifiedEvent_generated_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):UnsaveUnifiedEvent_generated_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let b={},h=v.Ps`
  mutation unsaveUnifiedEvent($input: SaveInput!) {
    unsaveUnifiedEvent(input: $input) {
      event {
        id
        isSaved
      }
    }
  }
`;var y=n(23922),w=n(43114),j=n(15065),S=n(33355),O=n(33669),x=n(85848),E=n(50542),P=n(2931),k=n(11527);function SaveEventButton_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function SaveEventButton_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?SaveEventButton_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):SaveEventButton_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let C=(0,a.vU)({saveEvent:{id:"saveEventStar.saveEvent",defaultMessage:"Save event"},unsaveEvent:{id:"saveEventStar.unsaveEvent",defaultMessage:"Unsave event"}}),removeSavedEventFromCache=(e,t)=>{var n,r,o,i,a;let s=(null==e?void 0:null===(n=e.self)||void 0===n?void 0:null===(r=n.savedEvents)||void 0===r?void 0:r.edges)||[],l=Number(null==e?void 0:null===(o=e.self)||void 0===o?void 0:null===(i=o.savedEvents)||void 0===i?void 0:i.totalCount)||1;if(e&&s.length){let n=s.filter(e=>e.node.id!==t),r=(l-1).toString();return{self:SaveEventButton_objectSpread(SaveEventButton_objectSpread({},e.self),{},{savedEvents:SaveEventButton_objectSpread(SaveEventButton_objectSpread({},null===(a=e.self)||void 0===a?void 0:a.savedEvents),{},{count:r,edges:n})})}}return null},addSavedEventToCache=(e,t)=>{var n,r,o,i,a,s,l;let c=null==e?void 0:null===(n=e.self)||void 0===n?void 0:null===(r=n.savedEvents)||void 0===r?void 0:r.totalCount,d=null==e?void 0:null===(o=e.self)||void 0===o?void 0:null===(i=o.savedEvents)||void 0===i?void 0:i.edges,[u]=null===(a=(0,O.U)({totalCount:1,edges:[null==t?void 0:null===(s=t.saveUnifiedEvent)||void 0===s?void 0:s.event]}))||void 0===a?void 0:a.edges;return d&&u?SaveEventButton_objectSpread(SaveEventButton_objectSpread({},e),{},{self:SaveEventButton_objectSpread(SaveEventButton_objectSpread({},null==e?void 0:e.self),{},{savedEvents:SaveEventButton_objectSpread(SaveEventButton_objectSpread({},null==e?void 0:null===(l=e.self)||void 0===l?void 0:l.savedEvents),{},{__typename:"MemberEventConnection",count:(c||1)+1,edges:d.concat(SaveEventButton_objectSpread(SaveEventButton_objectSpread({},u),{},{cursor:"",__typename:"MemberEventEdge"}))})})}):null},createReturnUri=(e,t,n,r)=>{if("/"===e)return"";let o=`${(0,E.MT8)(n)}${e}`;if(Object.keys(t).length){let e=new URLSearchParams("action=saveEvent");Object.keys(t).forEach(n=>e.append(n,t[n].toString())),r&&(e.append("c",r),e.append("chapterId",r)),o=`${o}?${e.toString()}`}return o},getQueryVars=e=>({filter:u.HL.Future,sort:u.As.Asc,first:e}),SaveEventButtonComponent=e=>{let{id:t,title:n="",isSaved:r,containerName:a,useCache:u=!1,eventsShelfQueryLimit:v,groupId:m,autoSaveEvent:O,onSaveEvent:E,onSaveEventSuccess:_,recommendationId:N,recommendationSource:I,notificationId:D,searchId:$}=e,{0:T,1:R}=(0,i.useState)(r),{0:Z,1:M}=(0,i.useState)(!1),{asPath:B,query:L}=(0,o.useRouter)(),A=(0,y.Z)(),{locale:G}=(0,j.M)(),F=(0,s.Z)(),U=(0,l.S)(),K=A===w.e.LOGGED_IN,z=getQueryVars(v),[V,{loading:H}]=function(e){let t=_objectSpread(_objectSpread({},f),e);return p.D(g,t)}({variables:{input:{eventId:t}},update:(e,t)=>{let{data:n,errors:r}=t;if(r){console.error("Error saving event: ",null==r?void 0:r.map(e=>e.message));return}if(u)try{let t=e.readQuery({query:d.Ee,variables:z}),r=addSavedEventToCache(t,n);r&&e.writeQuery({query:d.Ee,data:r,variables:z})}catch(e){console.error("save event data not merged with Apollo cache:\n",e)}_&&_()},refetchQueries:[d.Ee]}),[W,{loading:Q}]=function(e){let t=UnsaveUnifiedEvent_generated_objectSpread(UnsaveUnifiedEvent_generated_objectSpread({},b),e);return p.D(h,t)}({variables:{input:{eventId:t}},update:(e,n)=>{let{errors:r}=n;if(r){console.error("Error unsaving event: ",null==r?void 0:r.map(e=>e.message));return}if(u)try{let n=e.readQuery({query:d.Ee,variables:z}),r=removeSavedEventFromCache(n,t);r&&e.writeQuery({query:d.Ee,data:r,variables:z})}catch(e){console.error("Unsave event data not merged with Apollo cache:\n",e)}},refetchQueries:[d.Ee]});(0,i.useEffect)(()=>{R(r)},[r]);let handleAutoSaveEvent=async()=>{await V(),M(!0),R(!0),null==_||_()};return(!T&&O&&!Z&&K&&handleAutoSaveEvent(),T)?(0,k.jsx)(P.ZP,{className:"text-peach hover:text-lightPeach","data-testid":"unsave-event-button",onClick:e=>(e.preventDefault(),e.stopPropagation(),H||Q)?null:(R(!1),null==U||U.trackUserAction({kind:S.E.EVENT_UNSAVED,info:{event:{id:t},recommendation:{id:N,source:I},notification:{id:D},searchId:$}}),W()),"aria-label":`${F.formatMessage(C.unsaveEvent)}${n?` ${n}`:""}`,"data-element-name":(0,x.m)(a,"unsaveButton"),"data-event-label":"unsave-event-icon","data-eventref":t,children:(0,k.jsx)(c.ZP,{icon:"bookmark",alt:F.formatMessage(C.unsaveEvent)})}):(0,k.jsx)(P.ZP,{className:"text-gray6 hover:text-gray7","data-testid":"save-event-button",onClick:e=>{if(e.preventDefault(),e.stopPropagation(),K){if(!H&&!Q)return null==U||U.trackUserAction({kind:S.E.EVENT_SAVED,info:{event:{id:t},recommendation:{id:N,source:I},notification:{id:D},searchId:$}}),R(!0),V()}else if(E)E();else{let e=createReturnUri(B,L,G,m);window.location.href=`https://www.meetup.com/register/?returnUri=${e}`}return null},"aria-label":`${F.formatMessage(C.saveEvent)}${n?` ${n}`:""}`,"data-element-name":(0,x.m)(a,"saveButton"),"data-eventref":t,"data-event-label":"save-event-icon",children:(0,k.jsx)(c.ZP,{outline:!0,icon:"bookmark",alt:F.formatMessage(C.saveEvent)})})};var _=SaveEventButtonComponent},44475:function(e,t,n){"use strict";n.d(t,{Z:function(){return Share_ShareButton}});var r=n(19278),o=n(50959),i=n(73193),a=n(36122),s=n(11298),l=n(52374),c=n(53933),d=n(36464),u=n(33355),p=n(4814),v=n(39600),m=n(2931),f=n(94215),g=n(10175),b=n(20963),h=n(39476),y=n(11527);let w=["shareTitle","dataEventLabel","source","onClose","isOpen"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let ModalBody=e=>{let{shareTitle:t,dataEventLabel:n,source:r,onClose:o,isOpen:i}=e,a=(0,g.Z)(e,w);return(0,y.jsxs)("div",{className:"w-full","data-event-label":n,children:[(0,y.jsx)("p",{className:"text-center text-2xl font-bold",children:t}),(0,y.jsx)(f.E,_objectSpread(_objectSpread({},a),{},{itemClassName:"py-3"}))]})};var ShareModal=e=>{let t=(0,a.Z)(),{isOpen:n,onClose:r,source:o}=e,i=o===c.RK.Events,s=i?h.k.title:h.k.groupTitle;return n&&(0,y.jsx)(b.default,{isOpen:n,onClose:r,title:t.formatMessage(s),dataEventLabel:"Share Modal",children:(0,y.jsx)(ModalBody,_objectSpread({},e))})},utils_hasShare=()=>!!navigator.share,utils_share=e=>{try{if(navigator.share)return navigator.share(e);return Promise.reject()}catch(e){return Promise.reject()}},j=n(86064);function ShareButton_ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let S=(0,i.vU)({label:{id:"shareButton.label",defaultMessage:"Share event"},groupLabel:{id:"shareButton.groupLabel",defaultMessage:"Share group"},eventShareTitle:{id:"shareButton.eventShareTitle",defaultMessage:"Share this event"},groupShareTitle:{id:"shareButton.groupShareTitle",defaultMessage:"Share this group"}});var Share_ShareButton=e=>{let{className:t="fill-current text-gray6 hover:text-gray7",containerName:n,contentClassName:i,dataEventLabel:g,eventId:b,formattedMessage:h,groupName:w,isMedia:O=!0,link:x,recommendationId:E,recommendationSource:P,notificationId:k,searchId:C,shareClickIdContext:_,source:N,title:I,trackingClickIds:D,eventOrigin:$}=e,T=(0,a.Z)(),{0:R,1:Z}=(0,o.useState)(!1),{userAgentInfo:M}=(0,d.R2)(),B=(0,s.S)(),onShareClick=async e=>{if(null==B||B.trackUserAction({kind:u.E.SHARE_EVENT,info:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ShareButton_ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ShareButton_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({eventId:b},(0,v.od)($))}),e.preventDefault(),e.stopPropagation(),utils_hasShare()&&M.isMobile)try{await utils_share({title:I,url:x})}catch(e){}else Z(!0)},L=N===c.RK.Events?S.eventShareTitle:S.groupShareTitle,A=N===c.RK.Events?S.label:S.groupLabel,G=(0,f.o)(n).shareOpenClick,F=(0,j.Z)({shareClickIdPrefix:"share-in-",shareClickIdContext:_,trackingClickIds:D,trackingClickId:"shareOpen"}),U=I||w||"";return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(ShareModal,{campaign:`${n}_savedevents_share_modal`,containerName:n,dataEventLabel:L.defaultMessage,eventId:b,groupName:w||"",isOpen:R,link:x,onClose:()=>Z(!1),recommendationId:E,recommendationSource:P,notificationId:k,searchId:C,shareClickIdContext:_,shareTitle:T.formatMessage(L),source:N,title:I||"",trackingClickIds:D}),(0,y.jsx)(m.ZP,{className:t,onClick:onShareClick,"aria-label":`${T.formatMessage(A)}${U?` ${U}`:""}`,tabIndex:0,"data-element-name":G,"data-event-label":g??"Share icon","data-testid":"share-btn",children:(0,y.jsxs)("div",{className:(0,p.Z)("flex items-center",i),children:[(0,y.jsx)(l.ZP,{"data-element-name":F,outline:!0,icon:"share",alt:T.formatMessage(L)}),O&&h&&(0,y.jsxs)("div",{className:"px-2",children:[" ",h," "]})]})})]})}},94215:function(e,t,n){"use strict";n.d(t,{o:function(){return SHARE_CLICKS},E:function(){return ShareList}});var r=n(10175),o=n(19278),i=n(15912),a=n.n(i),s=n(50959),l=n(36122),c=n(11298),d=n(52374),u=n(33355),p=n(4814),v=n(39600),m=n(50542),f=n(2931),g=n(52358),b=n(96975),h=n(39476);let generateNextdoorUrl=e=>`https://nextdoor.com/sharekit/?source=meetup&body=${e}`,generateEventNextdoorUrl=(e,t)=>{let n=encodeURIComponent(`${t} ${e}`);return generateNextdoorUrl(n)},nextdoorShare=e=>{window.open(e,"nextdoorwindow","left=20,top=20,width=600,height=338,toolbar=0,resizable=1")};var y=n(71440),w=n(86064),j=n(73193);let S=(0,j.vU)({mailSubject:{id:"emailShare.mailSubjectLine",defaultMessage:'Check out "{EVENT_OR_GROUP_TITLE}"'},mailBodyEventSharing:{id:"emailShare.mailBodyEventSharingLine",defaultMessage:'Check out this Meetup event from "{GROUP_NAME}"'},mailBodyGroupSharing:{id:"emailShare.mailBodyGroupSharing",defaultMessage:"Check out this Meetup group"}});var utils_shareViaEmail=(e,t,n,r)=>{let o=`${r.formatMessage(S.mailBodyEventSharing,{GROUP_NAME:n})}%0D%0A%0D%0A"${e}": ${t}`,i=`${r.formatMessage(S.mailBodyGroupSharing)}: ${t}`,a=r.formatMessage(S.mailSubject,{EVENT_OR_GROUP_TITLE:e});location.href=`mailto:?body=${n?o:i}&subject=${a}`},O=n(11527);let x=["campaign","containerName","eventId","groupName","hideCopy","hideLabel","itemClassName","link","listItemClassName","recommendationId","recommendationSource","notificationId","searchId","shareClickIdContext","title","trackingClickIds"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let TwitterIcon=e=>(0,O.jsx)(d.ZP,_objectSpread({icon:"socialTwitter",svgClassName:"text-gray6"},e)),FacebookIcon=e=>(0,O.jsx)(d.ZP,_objectSpread({icon:"socialFacebookCircle",svgClassName:"text-gray6"},e)),NextdoorIcon=e=>(0,O.jsx)(d.ZP,_objectSpread({icon:"socialNextdoor",svgClassName:"text-gray6"},e)),LinkedInIcon=e=>(0,O.jsx)(d.ZP,_objectSpread({icon:"socialLinkedinSquareColor",svgClassName:"text-gray6"},e)),EmailIcon=e=>(0,O.jsx)(d.ZP,_objectSpread({icon:"email",svgClassName:"text-gray6",size:22},e)),BookmarkIcon=e=>(0,O.jsx)(d.ZP,_objectSpread({icon:"bookmark",svgClassName:"text-gray6",size:22},e)),SHARE_CLICKS=e=>({shareOpenClick:`${e}-share-click`,shareCloseClick:`${e}-share-modal-close-click`,shareOnNextdoor:`${e}-share_on_nextdoor`,shareOnFacebook:`${e}-share_on_facebook`,shareOnLinkedIn:`${e}_share_on_linkedin`,shareOnTwitter:`${e}_share_on_twitter`,shareEmail:`${e}_share_email`,shareLink:`${e}-savedevents_share_link`}),ShareList=e=>{let{campaign:t,containerName:n,eventId:o,groupName:i,hideCopy:d,hideLabel:j,itemClassName:S,link:E,listItemClassName:P,recommendationId:k,recommendationSource:C,notificationId:_,searchId:N,shareClickIdContext:I,title:D,trackingClickIds:$}=e,T=(0,r.Z)(e,x),R=(0,l.Z)(),{0:Z,1:M}=(0,s.useState)(!1),B=(0,c.S)(),L=(0,m.mis)(E),A=(0,s.useMemo)(()=>{var e,r,o,s,l,c;return[{name:"Nextdoor",platform:"nextdoor",Icon:NextdoorIcon,handler:async()=>{nextdoorShare(generateEventNextdoorUrl(`${L}?${(0,v.CS)(t,"nextdoor")}`,D))},clickEvent:(null===(e=SHARE_CLICKS(n))||void 0===e?void 0:e.shareOnNextdoor)||"",clickId:(0,w.Z)({shareClickIdPrefix:"share-nextdoor-in-",shareClickIdContext:I,trackingClickIds:$,trackingClickId:"shareNextdoor"})},{name:"Facebook",platform:"facebook",Icon:FacebookIcon,handler:async()=>{await (0,g.u)(),(0,g.R)(`${L}?${(0,v.CS)(t,"facebook")}`,D)},clickEvent:(null===(r=SHARE_CLICKS(n))||void 0===r?void 0:r.shareOnFacebook)||"",clickId:(0,w.Z)({shareClickIdPrefix:"share-facebook-in-",shareClickIdContext:I,trackingClickIds:$,trackingClickId:"shareFacebook"})},{name:"Twitter",platform:"twitter",Icon:TwitterIcon,handler:()=>(0,y.Kx)((0,y.lv)(`${L}?${(0,v.CS)(t,"twitter")}`,D)),clickEvent:(null===(o=SHARE_CLICKS(n))||void 0===o?void 0:o.shareOnTwitter)||"",clickId:(0,w.Z)({shareClickIdPrefix:"share-twitter-in-",shareClickIdContext:I,trackingClickIds:$,trackingClickId:"shareTwitter"})},{name:"LinkedIn",platform:"linkedin",Icon:LinkedInIcon,handler:()=>(0,b.EV)((0,b.rQ)(`${L}?${(0,v.CS)(t,"linkedin")}`,D)),clickEvent:(null===(s=SHARE_CLICKS(n))||void 0===s?void 0:s.shareOnLinkedIn)||"",clickId:(0,w.Z)({shareClickIdPrefix:"share-linkedin-in-",shareClickIdContext:I,trackingClickIds:$,trackingClickId:"shareLinkedIn"})},{name:R.formatMessage(h.k.email),platform:"email",Icon:EmailIcon,handler:()=>utils_shareViaEmail(D,L,i,R),clickEvent:(null===(l=SHARE_CLICKS(n))||void 0===l?void 0:l.shareEmail)||"",clickId:(0,w.Z)({shareClickIdPrefix:"share-email-in-",shareClickIdContext:I,trackingClickIds:$,trackingClickId:"shareEmail"})},!d&&{name:Z?R.formatMessage(h.k.copied):R.formatMessage(h.k.copyLink),platform:"copy",Icon:BookmarkIcon,handler:()=>{M(a()(`${L}?${(0,v.CS)(t,"link")}`))},clickEvent:(null===(c=SHARE_CLICKS(n))||void 0===c?void 0:c.shareLink)||"",a11yLive:!0,clickId:(0,w.Z)({shareClickIdPrefix:"share-copy-link-in-",shareClickIdContext:I,trackingClickIds:$,trackingClickId:"shareCopy"})}].filter(Boolean)},[n,I,$,R,d,Z,L,t,D,i]);return(0,O.jsx)("ul",_objectSpread(_objectSpread({},T),{},{children:A.map(e=>(0,O.jsx)("li",{className:(0,p.Z)("list-style-none",P),"aria-live":e.a11yLive?"polite":void 0,children:(0,O.jsx)(f.ZP,{className:"w-full text-viridian",onClick:t=>{t.preventDefault(),e.handler(),e.handler&&o&&(null==B||B.trackUserAction({kind:u.E.EVENT_SHARED,info:{event:{id:o,shared_on:e.platform},recommendation:{id:k,source:C},notification:{id:_},searchId:N}}))},"data-element-name":e.clickEvent,"data-event-label":`${e.name} Modal`,tabIndex:0,children:(0,O.jsxs)("div",{id:e.clickId,className:(0,p.Z)("flex items-center",S),title:e.name,children:[(0,O.jsx)("div",{className:"flex h-6 w-6 items-center",children:(0,O.jsx)(e.Icon,{id:`${e.clickId}-icon`,"aria-hidden":"true",title:e.name})}),!j&&(0,O.jsx)("div",{className:"ml-2",id:`${e.clickId}-label`,children:e.name})]})})},e.name))}))}},52358:function(e,t,n){"use strict";n.d(t,{R:function(){return facebookShare},u:function(){return initFacebookSDK}});var r=n(16375),Share_createFacebookScript=()=>{let e=document.createElement("script");return e.type="text/javascript",e.async=!0,e.crossOrigin="anonymous",e.src="https://connect.facebook.net/en_US/sdk.js",e},Share_loadFacebookScript=()=>new Promise((e,t)=>{!function(e){let t=Share_createFacebookScript();t.onload=()=>e(null,t),t.onerror=()=>e(Error()),document.head.append(t)}((n,r)=>{n?t(n):e(r)})});let o=!1,initFacebookSDK=async()=>{try{if(o)return;window.FB||await Share_loadFacebookScript();let{FB:e}=window,t=null==e?void 0:e.init;t&&!o&&(t({appId:r.ye,autoLogAppEvents:!0,cookie:!0,xfbml:!0,version:r.Nj}),o=!0)}catch(e){}},facebookShare=(e,t)=>{let{FB:n}=window;n&&n.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}},52153:function(e,t,n){"use strict";n.d(t,{T:function(){return r.Z}});var r=n(44475)},96975:function(e,t,n){"use strict";n.d(t,{EV:function(){return linkedInShare},rQ:function(){return generateEventLinkedInUrl}});let generateLinkedInUrl=e=>{let{paramUrl:t,paramTitle:n}=e;return`http://www.linkedin.com/shareArticle?mini=true&url=${t}&title=${n}`},generateEventLinkedInUrl=(e,t)=>{let n=encodeURIComponent(t),r=encodeURIComponent(e);return generateLinkedInUrl({paramTitle:n,paramUrl:r})},linkedInShare=e=>{window.open(e,"linkedinwindow","left=20,top=20,width=600,height=338,toolbar=0,resizable=1")}},39476:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(73193);let o=(0,r.vU)({eventTweetPrefix:{id:"eventSharing.eventTweetPrefix",defaultMessage:"Check out this Meetup: {EVENT_TITLE}"},shareDropdown:{id:"eventSharing.shareDropdownButton",defaultMessage:"Forward to a friend"},facebookShareButtonLabel:{id:"eventSharing.facebookShareButtonLabel",defaultMessage:"Share"},twitterTweetButtonLabel:{id:"eventSharing.twitterTweetButtonLabel",defaultMessage:"Tweet"},linkedInShareButtonLabel:{id:"eventSharing.linkedInShareButtonLabel",defaultMessage:"Share"},emailShareButtonLabel:{id:"eventSharing.emailShareButtonLabel",defaultMessage:"Email"},title:{id:"shareModal.title",defaultMessage:"Share an event modal"},groupTitle:{id:"shareModal.groupTitle",defaultMessage:"Share a group modal"},copyLink:{id:"shareModal.copyLink",defaultMessage:"Copy link"},copied:{id:"shareModal.copied",defaultMessage:"Copied"},email:{id:"shareModal.email",defaultMessage:"Email"}})},71440:function(e,t,n){"use strict";n.d(t,{Kx:function(){return twitterShare},lv:function(){return generateEventTweetUrl}});let r={"fr-FR":"FR","de-DE":"DE","ja-JP":"JP","it-IT":"IT","es-ES":"ES","pt-BR":"BR","pl-PL":"PL"},generateTweetUrl=(e,t,n,r)=>`https://www.twitter.com/intent/tweet/?text=${e}&url=${t}&hashtags=${n}&via=${r}`,getLocalizedTwitterHandle=e=>`Meetup${r[e]||""}`,getTextParam=e=>e?e.length>280?`${e.substring(0,280)}...`:e:"",generateEventTweetUrl=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US",r=encodeURIComponent(getTextParam(t)),o=encodeURIComponent(e),i=getLocalizedTwitterHandle(n);return generateTweetUrl(r,o,"Meetup",i)},twitterShare=e=>{let{screen:t}=window,n=0,r=0;t&&(r=Math.round(t.width/2-275),t.height>310&&(n=Math.round(t.height/2-155))),window.open(e,"tweet",`width=550,height=310,left=${r},top=${n}`)}},86064:function(e,t){"use strict";t.Z=e=>{let{shareClickIdPrefix:t,shareClickIdContext:n,trackingClickIds:r,trackingClickId:o}=e;return null!=r&&r[o]?null==r?void 0:r[o]:n?`${t}${n}`:void 0}},53301:function(e,t,n){"use strict";n.d(t,{e:function(){return getIsHappeningNow}});var r=n(80785),o=n(47208),i=n(37307);let getIsHappeningNow=(e,t)=>{try{let n=new Date,r="string"==typeof e?(0,i.Z)(e):e,a="string"==typeof t?(0,i.Z)(t):t,s=(0,o.Z)(n,r),l=(0,o.Z)(n,a);return s&&!l}catch(e){return r.Tb(e),!1}}},33669:function(e,t,n){"use strict";n.d(t,{SE:function(){return processRsvps},U:function(){return processUpcomingEvents}});var r=n(16391);let processRsvps=e=>(0,r.Uy)(e,e=>{var t;if(!e)return e;void 0!==e.totalCount&&(e.count=e.totalCount),e.edges=null==e?void 0:null===(t=e.edges)||void 0===t?void 0:t.map(e=>{var t,n,r,o,i,a,s,l,c,d,u,p,v,m,f,g,b;return null!=e&&e.node&&("object"==typeof(null==e?void 0:null===(t=e.node)||void 0===t?void 0:null===(n=t.event)||void 0===n?void 0:n.going)&&(e.node.event.going=null==e?void 0:null===(s=e.node)||void 0===s?void 0:null===(l=s.event)||void 0===l?void 0:null===(c=l.going)||void 0===c?void 0:c.totalCount),null!=e&&null!==(r=e.node)&&void 0!==r&&null!==(o=r.event)&&void 0!==o&&o.group&&(e.node.event.timezone=null==e?void 0:null===(d=e.node)||void 0===d?void 0:null===(u=d.event)||void 0===u?void 0:null===(p=u.group)||void 0===p?void 0:p.timezone,e.node.event.group.groupPhoto=null==e?void 0:null===(v=e.node)||void 0===v?void 0:null===(m=v.event)||void 0===m?void 0:null===(f=m.group)||void 0===f?void 0:f.keyGroupPhoto),null!=e&&null!==(i=e.node)&&void 0!==i&&null!==(a=i.event)&&void 0!==a&&a.featuredEventPhoto&&(e.node.event.images=[null==e?void 0:null===(g=e.node)||void 0===g?void 0:null===(b=g.event)||void 0===b?void 0:b.featuredEventPhoto])),e})}),processEvent=e=>{var t,n,r,o,i,a,s,l,c,d;return null!=e&&e.node&&(null!=e&&e.rsvpState&&(e.node.rsvpState=null==e?void 0:e.rsvpState),"object"==typeof(null==e?void 0:null===(t=e.node)||void 0===t?void 0:t.going)&&(e.node.going=null==e?void 0:null===(o=e.node)||void 0===o?void 0:null===(i=o.going)||void 0===i?void 0:i.totalCount),null!=e&&null!==(n=e.node)&&void 0!==n&&n.group&&(e.node.timezone=null==e?void 0:null===(a=e.node)||void 0===a?void 0:null===(s=a.group)||void 0===s?void 0:s.timezone,e.node.group.groupPhoto=null==e?void 0:null===(l=e.node)||void 0===l?void 0:null===(c=l.group)||void 0===c?void 0:c.keyGroupPhoto),null!=e&&null!==(r=e.node)&&void 0!==r&&r.featuredEventPhoto&&(e.node.images=[null==e?void 0:null===(d=e.node)||void 0===d?void 0:d.featuredEventPhoto])),e},processUpcomingEvents=e=>(0,r.Uy)(e,e=>{var t;if(!e)return e;void 0!==e.totalCount&&(e.count=e.totalCount),e.edges=null==e?void 0:null===(t=e.edges)||void 0===t?void 0:t.map(processEvent)})},16375:function(e,t,n){"use strict";n.d(t,{Ht:function(){return facebookAuthLink},Nj:function(){return m},Ws:function(){return appleAuthLink},qJ:function(){return googleAuthLink},ye:function(){return p}});var r=n(19278),o=n(96131),i=n(12557),a=n.n(i),s=n(6798),l=n(94487),c=n(14224);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let{APPLE_CLIENT_ID:d="com.meetup.web",GOOGLE_CLIENT_ID:u="855636443875-pmqkjkrj33pvp0t1ghecgp4f3l746856.apps.googleusercontent.com",FACEBOOK_CLIENT_ID:p="2403839689"}=null==c?void 0:c.env,v=o.Z.get("FACEBOOK_GRAPH_API_VERSION");v&&console.log(`Facebook Graph API version set to ${v}.`);let m=v||"v17.0",f=s.BB?"https://www.meetup.com/ties2":"https://www.dev.meetup.com:3000/ties2",g=s.BB?"https://www.meetup.com/ties2/":"https://www.dev.meetup.com:3000/ties2/",facebookAuthLink=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return`https://www.facebook.com/${m}/dialog/oauth?${(0,l.Pz)({client_id:p,redirect_uri:g,scope:"email user_friends",response_type:"token",state:(0,l.Pz)(a()({returnUri:e,register:t,facebook:!0},Boolean))})}`},googleAuthLink=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return`https://accounts.google.com/o/oauth2/auth?${(0,l.Pz)(_objectSpread(_objectSpread({state:(0,l.Pz)(a()({returnUri:e,register:t},Boolean)),client_id:u,access_type:"offline"},t&&{prompt:"consent"}),{},{scope:"email profile",redirect_uri:"true"===o.Z.get("FEATURE_NEW_TIES")?g:f,response_type:"code"}))}`},appleAuthLink=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return`https://appleid.apple.com/auth/authorize?${(0,l.Pz)({redirect_uri:g,state:(0,l.Pz)(a()({returnUri:e,register:t},Boolean)),client_id:d,response_type:"code id_token",scope:"name email",response_mode:"form_post"})}`}},85848:function(e,t,n){"use strict";function getElementName(e,t,n){let r;return n&&(r=n.split(" ").join("-").toLowerCase()),n?`${e}-${t}-${r}`:`${e}-${t}`}n.d(t,{m:function(){return getElementName}})},7328:function(e){e.exports={c1u48s3d:"c1u48s3d",m14px31h:"m14px31h",txmv3m7:"txmv3m7"}},86611:function(e){e.exports={h1lk27w4:"h1lk27w4",d1umy16x:"d1umy16x"}},44049:function(e){e.exports={d1n61gxy:"d1n61gxy"}},95552:function(e){e.exports={d1v7zmlk:"d1v7zmlk",e6v85t4:"e6v85t4",e1q889kb:"e1q889kb"}},23387:function(e){e.exports={d15a685b:"d15a685b"}},17316:function(e){e.exports={d1efofxw:"d1efofxw",batgi3y:"batgi3y"}}}]);