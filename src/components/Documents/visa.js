import React from 'react'
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from 'react-router-dom'

function visa() {
    return (
        <div className="container">
            <Breadcrumb className="top">
                <BreadcrumbItem>
                    <Link to="/guides" className="link">Guides</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to="/guides/documents" className="link">Documents</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Visa
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="visaintro">
            <h2>Visa</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt leo. Duis nec posuere nisl, a eleifend leo. Aliquam nec enim sit amet orci sodales tempor. Nam rutrum lectus enim, a vestibulum libero malesuada bibendum. Nulla id tortor nulla. Phasellus at rutrum felis. Aliquam erat volutpat. Ut elementum, ligula quis porta scelerisque, tortor eros porta massa, rutrum porta tortor nunc a ipsum. Fusce ac turpis dictum, sagittis dui et, rhoncus ante. Aenean et interdum risus. In hac habitasse platea dictumst. Nulla et enim iaculis, lobortis diam in, tincidunt nibh.

            Donec aliquam neque nec lacus iaculis malesuada. Quisque ullamcorper enim vitae libero dapibus, eget blandit risus iaculis. Mauris hendrerit lectus a vehicula sollicitudin. Phasellus laoreet lectus in augue mattis lacinia consectetur non nisi. Duis id sem ac lectus lacinia dictum placerat at elit. Suspendisse non magna vitae justo tempus mollis vestibulum in est. In non massa in tortor convallis hendrerit eleifend ut nisl. Phasellus iaculis sollicitudin consectetur. Fusce hendrerit diam vel pharetra porta. Integer quis lobortis sapien. Aliquam euismod, libero a pretium tempus, nisl metus molestie risus, eu varius lacus risus sit amet quam. Aliquam mattis pulvinar lacinia. Etiam in dui ipsum.

            Donec felis nisi, rutrum vitae accumsan sit amet, pulvinar a dolor. Maecenas et ullamcorper orci. Nulla consectetur facilisis velit, quis mollis ligula varius at. Nunc sollicitudin velit nisi, ac feugiat augue blandit et. Proin finibus auctor malesuada. Quisque quis neque facilisis, ultrices sapien in, condimentum lorem. Sed dapibus nisi elit, sit amet dapibus risus cursus vitae. Integer convallis, metus eu facilisis maximus, ligula ante pretium quam, vel dapibus nisl mi ac velit. Curabitur id ipsum et lectus pharetra ornare. Nullam nec erat mi.

            Curabitur vehicula blandit mollis. Donec pulvinar nisl nulla. Vestibulum est eros, ullamcorper posuere velit eget, tincidunt scelerisque eros. Aenean dictum ex orci, quis molestie dolor iaculis id. In gravida dignissim bibendum. Morbi porttitor nibh in tristique convallis. Curabitur aliquam sollicitudin metus sit amet pellentesque.

Nunc ac placerat turpis. Aenean a molestie turpis. Pellentesque condimentum lorem a vehicula auctor. Suspendisse commodo lacus arcu, eu hendrerit quam vulputate at. In sit amet ex vulputate, dignissim mauris quis, hendrerit risus. Ut in ornare neque. Nunc sollicitudin urna ac elit lacinia, ut mollis augue mollis. Nunc fermentum nisi non iaculis finibus. Aenean vulputate tortor sit amet pharetra ultrices. Pellentesque eget efficitur nisi.</p>
            <hr />
            </div>
            <h4>D-10 Visa Application</h4>
            
            <ol className="spisok">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
            </ol>
            <hr />
            <div className="jobseeking">
                <h4>Some random data that will be here in the future</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tincidunt leo. Duis nec posuere nisl, a eleifend leo. Aliquam nec enim sit amet orci sodales tempor. Nam rutrum lectus enim, a vestibulum libero malesuada bibendum. Nulla id tortor nulla. Phasellus at rutrum felis. Aliquam erat volutpat. Ut elementum, ligula quis porta scelerisque, tortor eros porta massa, rutrum porta tortor nunc a ipsum. Fusce ac turpis dictum, sagittis dui et, rhoncus ante. Aenean et interdum risus. In hac habitasse platea dictumst. Nulla et enim iaculis, lobortis diam in, tincidunt nibh.

                Donec aliquam neque nec lacus iaculis malesuada. Quisque ullamcorper enim vitae libero dapibus, eget blandit risus iaculis. Mauris hendrerit lectus a vehicula sollicitudin. Phasellus laoreet lectus in augue mattis lacinia consectetur non nisi. Duis id sem ac lectus lacinia dictum placerat at elit. Suspendisse non magna vitae justo tempus mollis vestibulum in est. In non massa in tortor convallis hendrerit eleifend ut nisl. Phasellus iaculis sollicitudin consectetur. Fusce hendrerit diam vel pharetra porta. Integer quis lobortis sapien. Aliquam euismod, libero a pretium tempus, nisl metus molestie risus, eu varius lacus risus sit amet quam. Aliquam mattis pulvinar lacinia. Etiam in dui ipsum.

                Donec felis nisi, rutrum vitae accumsan sit amet, pulvinar a dolor. Maecenas et ullamcorper orci. Nulla consectetur facilisis velit, quis mollis ligula varius at. Nunc sollicitudin velit nisi, ac feugiat augue blandit et. Proin finibus auctor malesuada. Quisque quis neque facilisis, ultrices sapien in, condimentum lorem. Sed dapibus nisi elit, sit amet dapibus risus cursus vitae. Integer convallis, metus eu facilisis maximus, ligula ante pretium quam, vel dapibus nisl mi ac velit. Curabitur id ipsum et lectus pharetra ornare. Nullam nec erat mi.

            Curabitur vehicula blandit mollis.</p>
            </div>
        </div>
    )
}

export default visa
