/* eslint-disable camelcase */
import * as React from 'react'

interface SCProps {
  sc_project: number
  sc_security: string
  sc_image_url?: string
  disableBackLink?: boolean
}

const StatCounter = ({
  sc_project = 0,
  sc_security = '',
  sc_image_url = undefined,
  disableBackLink = undefined,
}: SCProps) => {
  const _sc_image_url =
    sc_image_url ||
    `https://c.statcounter.com/${sc_project}/0/${sc_security}/1/`
  return (
    <React.Fragment>
      <script
        dangerouslySetInnerHTML={{
          __html: `var sc_project=${sc_project}; var sc_invisible=1; var sc_security="${sc_security}"; var sc_remove_link=1;`,
        }}
      />
      <script
        type="text/javascript"
        src="https://www.statcounter.com/counter/counter.js"
        async
      />
      {disableBackLink ? (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div class="statcounter"><img class="statcounter" src="${_sc_image_url}" alt="Web Analytics Made Easy - Statcounter" referrerPolicy="no-referrer-when-downgrade"></div>`,
          }}
        />
      ) : (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div class="statcounter"><a title="Web Analytics Made Easy - Statcounter" href="https://statcounter.com/" target="_blank"><img class="statcounter" src="${_sc_image_url}" alt="Web Analytics Made Easy - Statcounter" referrerPolicy="no-referrer-when-downgrade"></a></div>`,
          }}
        />
      )}
    </React.Fragment>
  )
}

export default StatCounter
