import { MyComponentxElement } from './my-component'

describe('my-componentx', function() {
  let el: MyComponentxElement

  beforeEach(async function() {
    el = document.createElement('my-componentx')
    el.style.display = 'none'
    document.body.appendChild(el)
    await el.updateComplete
  })

  afterEach(function() {
    document.body.removeChild(el)
  })

  it('should create instance', function() {
    const el = document.createElement('my-componentx')
    chai.expect(el).to.be.instanceof(MyComponentxElement)
  })

  it('should raise event when button clicked', async function() {
    let clicked = false
    el.addEventListener('my-componentx-click', () => {
      clicked = true
    })
    const button = el.shadowRoot.querySelector('button')
    button.dispatchEvent(new Event('click'))
    chai.expect(clicked).to.be.true
  })

  it('should contain current name and key in event', async function() {
    el.name = 'Whoever'
    el.key = 123
    await el.updateComplete
    let detail = ''
    el.addEventListener('my-componentx-click', (e: CustomEvent<string>) => {
      detail = e.detail
    })
    const button = el.shadowRoot.querySelector('button')
    button.dispatchEvent(new Event('click'))
    chai.expect(detail).to.deep.equal({ name: 'Whoever', key: 123 })
  })

  it('should render default name', async function() {
    const text = el.shadowRoot.querySelector('p').textContent.trim()
    chai.expect(text).to.equal('Hello from Oswee')
  })

  it('should render new name when set', async function() {
    el.name = 'Someone Else'
    await el.updateComplete
    const text = el.shadowRoot.querySelector('p').textContent.trim()
    chai.expect(text).to.equal('Hello from Someone Else')
  })
})
