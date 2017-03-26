;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M184.64768 836.34176c3.9936 3.9936 9.23648 5.98016 14.47936 5.98016 5.24288 0 10.48576-2.00704 14.49984-6.00064l292.70016-293.04832 292.70016 293.04832c3.9936 4.01408 9.23648 6.00064 14.49984 6.00064 5.24288 0 10.48576-2.00704 14.47936-5.98016 8.00768-7.9872 8.00768-20.95104 0.02048-28.95872L535.61344 514.64192 828.0064 221.92128c7.9872-8.00768 7.9872-20.97152-0.02048-28.95872-8.02816-8.00768-20.97152-8.00768-28.95872 0.02048L506.30656 486.03136 213.6064 192.98304c-8.00768-8.00768-20.97152-8.00768-28.95872-0.02048-8.00768 7.9872-8.00768 20.95104-0.02048 28.95872l292.37248 292.72064L184.6272 807.38304C176.64 815.37024 176.64 828.35456 184.64768 836.34176z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bookaskicon1419" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M493.309 924.779c-237.903 0-431.457-193.567-431.457-431.469s193.554-431.457 431.457-431.457 431.469 193.554 431.469 431.457-193.554 431.469-431.469 431.469zM493.309 91.311c-221.671 0-401.996 180.341-401.996 401.996 0 221.671 180.327 402.012 401.996 402.012s402.012-180.341 402.012-402.012c0-221.658-180.341-401.996-402.012-401.996z"  ></path>' +
    '' +
    '<path d="M947.418 962.147c-3.771 0-7.54-1.443-10.413-4.315l-159.441-159.441c-5.759-5.759-5.759-15.068 0-20.828s15.068-5.759 20.828 0l159.426 159.426c5.759 5.759 5.759 15.068 0 20.828-2.873 2.887-6.643 4.331-10.399 4.331z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M241.806 512.498 752.325 4.5 779.194 31.238 295.545 512.5 779.194 993.763 752.326 1020.5Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shop" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M798.680766 883.284141c-5.285377 0-9.570983-0.520863-12.213159-0.951675L233.693971 882.332467c-50.595328 0-75.04416-64.621786-77.664847-71.990614l-1.183965-3.327792L154.845159 628.336612l40.932248 0 0 171.358763c6.259564 15.35471 21.731954 41.705867 37.916565 41.705867l557.124733 0 1.868557 0.466628c1.353834 0.23843 14.436804 2.331092 23.01825-4.709255 8.710382-7.144724 10.538007-22.255887 10.538007-33.67496L826.243519 628.336612l40.932248 0 0 175.147042c0 29.78435-8.762571 51.909254-26.044166 65.75561C826.744939 880.765785 810.300408 883.284141 798.680766 883.284141z"  ></path>' +
    '' +
    '<path d="M262.884804 345.148901l496.253364 0 0 40.932248-496.253364 0 0-40.932248Z"  ></path>' +
    '' +
    '<path d="M223.390301 620.068298c-20.303418 0-71.678506-4.309142-110.12412-44.221154-33.017998-34.277688-48.487318-85.624123-45.979194-152.614863l0.147356-3.941775 123.767861-278.479479 639.617539 0L954.083116 418.152589l0.418532 2.665713c0.62831 3.992941 14.81645 98.452289-34.506908 156.140153-24.197098 28.30158-58.675354 42.652426-102.475929 42.652426-50.680263 0-79.053474-4.991688-104.688317-18.417465-21.683858-11.358699-39.646975-28.27395-63.241346-52.584636-3.329838 6.126534-7.454786 12.678764-12.532431 19.255553-18.223037 23.605627-52.351322 51.745525-111.452371 51.745525-37.873586 0-62.894446 0-84.025719-10.745738-19.797905-10.067286-33.700543-27.696806-58.340733-59.435671-4.378727 6.424316-9.830903 13.323447-16.568351 20.225647-22.137183 22.676465-62.975287 49.687656-131.952264 49.953715C232.726947 619.787912 228.757542 620.068298 223.390301 620.068298zM108.066763 428.65171c-1.39886 53.494355 10.260691 93.448322 34.678824 118.797663 27.547403 28.598338 65.574484 31.685653 80.644715 31.685653 4.954849 0 7.949043-0.321318 7.977695-0.324388l1.203408-0.143263 1.122567 0.010233c104.296391 0 126.071324-72.000847 126.279055-72.728418l10.982122-38.442544 24.76401 31.387871c6.895037 8.739035 13.048177 16.666588 18.47784 23.660886 22.596647 29.109991 33.938973 43.721781 45.937239 49.822732 11.835559 6.02011 30.589692 6.299473 65.472154 6.299473 34.102702 0 60.699454-12.053524 79.05245-35.826973 13.657045-17.691941 17.647939-35.32453 17.684778-35.497469l7.971555-37.85619 26.809599 27.891234c2.64627 2.753717 5.209652 5.426593 7.696286 8.019651 59.534931 62.082964 70.261227 73.269747 152.698774 73.269747 31.674397 0 54.991452-9.231245 71.281463-28.222785 33.385365-38.921451 27.233248-107.049085 25.583678-120.839159L804.219923 181.743274 217.80305 181.743274 108.066763 428.65171z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-me" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M962.852571 952.027429l-42.861714 0c-17.115429-149.284571-121.270857-272.018286-260.608-315.830857-34.889143 14.628571-73.142857 22.893714-113.298286 22.893714-40.009143 0-78.189714-8.118857-112.932571-22.747429C294.107429 680.301714 190.171429 802.889143 172.982857 952.027429L129.536 952.027429c15.067429-154.843429 114.176-285.110857 251.245714-344.137143-77.165714-52.882286-128-141.677714-128-242.322286 0-162.084571 131.291429-293.449143 293.229714-293.449143s293.229714 131.364571 293.229714 293.449143c0 100.644571-50.761143 189.44-127.926857 242.322286C848.676571 666.770286 947.785143 796.964571 962.852571 952.027429zM797.330286 367.762286c0-138.678857-112.274286-251.026286-250.88-251.026286s-250.88 112.347429-250.88 251.026286c0 138.678857 112.347429 251.099429 250.88 251.099429S797.330286 506.441143 797.330286 367.762286z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-loading" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 0 512 0c19.2 0 32 12.8 32 32l0 134.4c0 19.2-12.8 32-32 32l0 0c-19.2 0-32-12.8-32-32L480 32C480 12.8 492.8 0 512 0L512 0 512 0zM512 825.6 512 825.6c19.2 0 32 12.8 32 32l0 134.4C544 1011.2 531.2 1024 512 1024l0 0c-19.2 0-32-12.8-32-32l0-134.4C480 838.4 492.8 825.6 512 825.6L512 825.6 512 825.6zM1024 512 1024 512c0 19.2-12.8 32-32 32l-134.4 0c-19.2 0-32-12.8-32-32l0 0c0-19.2 12.8-32 32-32l134.4 0C1011.2 480 1024 492.8 1024 512L1024 512 1024 512zM198.4 512 198.4 512c0 19.2-12.8 32-32 32L32 544C12.8 544 0 531.2 0 512l0 0c0-19.2 12.8-32 32-32l134.4 0C185.6 480 198.4 492.8 198.4 512L198.4 512 198.4 512zM953.6 256 953.6 256c6.4 12.8 6.4 32-12.8 44.8l-115.2 70.4c-12.8 6.4-32 6.4-44.8-12.8l0 0c-6.4-12.8-6.4-32 12.8-44.8l115.2-70.4C928 236.8 947.2 236.8 953.6 256L953.6 256 953.6 256zM243.2 665.6 243.2 665.6c6.4 12.8 6.4 32-12.8 44.8l-115.2 70.4c-12.8 6.4-32 6.4-44.8-12.8l0 0c-6.4-12.8-6.4-32 12.8-44.8l115.2-70.4C211.2 646.4 230.4 652.8 243.2 665.6L243.2 665.6 243.2 665.6zM768 70.4 768 70.4c12.8 6.4 19.2 25.6 12.8 44.8l-70.4 115.2c-6.4 12.8-25.6 19.2-44.8 12.8l0 0c-12.8-6.4-19.2-25.6-12.8-44.8l70.4-115.2C736 64 755.2 57.6 768 70.4L768 70.4 768 70.4zM358.4 780.8 358.4 780.8c12.8 6.4 19.2 25.6 12.8 44.8l-70.4 115.2C288 960 268.8 960 256 953.6l0 0c-12.8-6.4-19.2-25.6-12.8-44.8l70.4-115.2C320 774.4 339.2 774.4 358.4 780.8L358.4 780.8 358.4 780.8zM256 70.4 256 70.4C268.8 57.6 288 64 300.8 76.8l70.4 115.2c6.4 12.8 6.4 32-12.8 44.8l0 0C339.2 249.6 320 243.2 313.6 230.4L243.2 108.8C236.8 96 243.2 76.8 256 70.4L256 70.4 256 70.4zM665.6 780.8 665.6 780.8c12.8-6.4 32-6.4 44.8 12.8l70.4 115.2c6.4 12.8 6.4 32-12.8 44.8l0 0c-12.8 6.4-32 6.4-44.8-12.8l-70.4-115.2C646.4 806.4 652.8 787.2 665.6 780.8L665.6 780.8 665.6 780.8zM70.4 256 70.4 256c6.4-12.8 25.6-19.2 44.8-12.8l115.2 70.4C243.2 320 249.6 339.2 243.2 352l0 0C230.4 371.2 211.2 377.6 198.4 364.8L83.2 300.8C64 288 57.6 268.8 70.4 256L70.4 256 70.4 256zM780.8 665.6 780.8 665.6c6.4-12.8 25.6-19.2 44.8-12.8l115.2 70.4c12.8 6.4 19.2 25.6 12.8 44.8l0 0c-6.4 12.8-25.6 19.2-44.8 12.8l-115.2-70.4C780.8 704 774.4 684.8 780.8 665.6L780.8 665.6 780.8 665.6zM780.8 665.6"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-hollowcinema" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M963.776 280.256c-6.72 0-13.504 1.216-20.288 3.648l-2.112 0.832c-0.512 0.32-50.56 26.688-99.968 56.832-34.368 20.928-57.792 37.056-73.792 49.856l0-88.448c0-50.112-34.496-90.688-76.992-90.688l-613.696 0c-42.432 0-76.992 40.64-76.992 90.688l0 417.984c0 50.112 34.56 90.752 76.992 90.752l252.992 0c9.28 0 16.832-7.744 16.832-17.152 0-9.536-7.552-17.152-16.832-17.152l-252.992 0c-24 0-43.52-25.28-43.52-56.384l0-417.984c0-31.104 19.52-56.384 43.52-56.384l613.76 0c24 0 43.584 25.28 43.584 56.384l0 417.984c0 31.104-19.52 56.384-43.584 56.384l-173.184 0c-9.28 0-16.768 7.68-16.768 17.152s7.488 17.152 16.768 17.152l173.184 0c42.496 0 76.992-40.64 76.992-90.752l0-116.544c15.936 12.736 39.424 28.992 73.792 49.856 49.408 30.08 99.456 56.512 99.968 56.704 8.32 4.48 16.896 6.656 25.408 6.656 35.328 0 57.152-36.416 57.152-70.08l0-299.328c-0.064-37.504-27.136-68.032-60.288-68.032zM990.528 647.616c0 18.688-11.328 35.712-23.68 35.712-3.136 0-6.464-0.896-10.048-2.752-107.776-56.768-181.184-107.712-189.056-123.456l0-118.336c7.744-15.68 80.768-66.304 187.904-122.816 2.752-0.896 5.504-1.344 8.128-1.344 14.784 0 26.688 15.104 26.688 33.728l0 299.264z"  ></path>' +
    '' +
    '<path d="M610.56 417.728c13.184 0 23.872-11.584 23.872-26.048s-10.688-26.112-23.872-26.112l-75.648 0c-13.12 0-23.872 11.648-23.872 26.112s10.752 26.048 23.872 26.048l75.648 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-movie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.064 44.48c-258.24 0-467.52 209.344-467.52 467.52s209.28 467.52 467.52 467.52c258.176 0 467.392-209.344 467.392-467.52s-209.216-467.52-467.392-467.52zM222.656 467.456c0-49.152 39.872-89.024 89.088-89.024s89.024 39.872 89.024 89.024c0 49.216-39.872 89.024-89.024 89.024-49.216 0-89.088-39.872-89.088-89.024zM378.432 801.408c-49.152 0-89.024-39.936-89.024-89.088s39.872-89.024 89.024-89.024 89.024 39.872 89.024 89.024-39.872 89.088-89.024 89.088zM422.976 289.344c0-49.152 39.872-89.024 89.024-89.024s89.024 39.872 89.024 89.024c0 49.216-39.872 89.024-89.024 89.024s-89.024-39.872-89.024-89.024zM645.632 801.408c-49.216 0-89.088-39.936-89.088-89.088s39.872-89.024 89.088-89.024c49.152 0 89.024 39.872 89.024 89.024s-39.872 89.088-89.024 89.088zM712.384 556.48c-49.152 0-89.088-39.872-89.088-89.024s39.936-89.024 89.088-89.024 89.024 39.872 89.024 89.024c0 49.216-39.808 89.024-89.024 89.024z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-position" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 1024C512 1024 127.99875 596.075 127.99875 384.00125 127.99875 171.9125 299.92125 0 512 0c212.0725 0 384.00125 171.9125 384.00125 384.00125C896.00125 596.075 512 1024 512 1024M512 49.22875c-184.88375 0-334.76625 152.0875-334.76625 339.69375 0 187.61125 334.76625 566.15375 334.76625 566.15375s334.7675-378.5425 334.7675-566.15375C846.76875 201.31625 696.88 49.22875 512 49.22875M512 512c-88.37 0-160-71.63125-160-160.00125 0-88.37 71.63-159.9975 160-159.9975 88.36875 0 160 71.6275 160 159.9975C672 440.36 600.36875 512 512 512M512 236.30625c-65.2525 0-118.15125 52.9075-118.15125 118.15375 0 65.25125 52.9 118.1575 118.15125 118.1575 65.26125 0 118.15125-52.90625 118.15125-118.1575C630.1525 289.21375 577.26125 236.30625 512 236.30625"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-indicator" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M476.16 102.4l71.68 0 0 204.8-71.68 0 0-204.8Z" fill="#E9E9E9" ></path>' +
    '' +
    '<path d="M685.760604 139.359897l62.076701 35.84-102.4 177.362002-62.076701-35.84 102.4-177.362002Z" fill="#989697" ></path>' +
    '' +
    '<path d="M848.800103 276.168408l35.84 62.076701-177.362002 102.4-35.84-62.076701 177.362002-102.4Z" fill="#9B999A" ></path>' +
    '' +
    '<path d="M921.6 476.16l0 71.68-204.8 0 0-71.68 204.8 0Z" fill="#A3A1A2" ></path>' +
    '' +
    '<path d="M884.640103 685.763902l-35.84 62.076701-177.362002-102.4 35.84-62.076701 177.362002 102.4Z" fill="#ABA9AA" ></path>' +
    '' +
    '<path d="M747.852913 848.800103l-62.076701 35.84-102.4-177.362002 62.076701-35.84 102.4 177.362002Z" fill="#B2B2B2" ></path>' +
    '' +
    '<path d="M547.84 921.6l-71.68 0 0-204.8 71.68 0 0 204.8Z" fill="#BAB8B9" ></path>' +
    '' +
    '<path d="M338.223788 884.640103l-62.076701-35.84 102.4-177.362002 62.076701 35.84-102.4 177.362002Z" fill="#C2C0C1" ></path>' +
    '' +
    '<path d="M175.199897 747.840603l-35.84-62.076701 177.362002-102.4 35.84 62.076701-177.362002 102.4Z" fill="#CBCBCB" ></path>' +
    '' +
    '<path d="M102.4 547.84l0-71.68 204.8 0 0 71.68-204.8 0Z" fill="#D2D2D2" ></path>' +
    '' +
    '<path d="M139.359897 338.245109l35.84-62.076701 177.362002 102.4-35.84 62.076701-177.362002-102.4Z" fill="#DADADA" ></path>' +
    '' +
    '<path d="M276.162695 175.199897l62.076701-35.84 102.4 177.362002-62.076701 35.84-102.4-177.362002Z" fill="#E2E2E2" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-loading1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M517.937531 0.216804c10.081372-10.948587-439.665855 388.343602-373.384147 738.734512-4.733547-64.234118 4.733547 285.048684 337.250197 285.048684h72.267899c332.504605 0 329.951139-349.282802 325.205547-285.048684 66.281708-350.39091-371.420869-749.683099-361.339496-738.734512" fill="#00BD76" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)