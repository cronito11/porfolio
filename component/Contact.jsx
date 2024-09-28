export default function Contact ()
{
    return <>
    <h1>Contact</h1>
{/*<!-- vertical divider element with text -->*/}
<div class="columns">
  <div class="column">
   {/* <!-- column content -->*/}
  </div>
  <div class="divider-vert" data-content="OR"></div>
  <div class="column">
    <div class="column col-9 col-sm-12">
    <h2>Send Mail</h2>
    <div class="form-group">
  <label class="form-label text-left" for="input-example-1">First Name</label>
  <input class="form-input" type="text" id="input-FirstName" placeholder="First Name"/>
  <label class="form-label text-left" for="input-example-1">Last Name</label>
  <input class="form-input" type="text" id="input-LastName" placeholder="Last Name"/>
  <label class="form-label text-left" for="input-example-1">Contact Number</label>
  <input class="form-input" type="tel" id="input-Number" pattern="\d*"placeholder="0(000)000-0000"/>
  <label class="form-label text-left" for="input-example-1">Email</label>
  <input class="form-input" type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$"></input>
  <label class="form-label text-left" for="input-example-3">Message</label>
  <textarea class="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
  </div>
</div>
  </div>
</div>
    </>
}