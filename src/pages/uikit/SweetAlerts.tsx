import React from 'react';
import { withSwal } from 'react-sweetalert2';
import { Row, Col, Card } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

// images
import logosm from '../../assets/images/logo-sm-dark.png';

const SweetAlerts = withSwal((props: any) => {
    const { swal } = props;

    let timerInterval: NodeJS.Timeout;

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Extended UI', path: '/extended-ui/sweet-alert' },
                    {
                        label: 'Sweet Alerts',
                        path: '/extended-ui/sweet-alert',
                        active: true,
                    },
                ]}
                title={'Sweet Alerts'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Examples</h4>

                            <p className="sub-header">
                                A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for
                                JavaScript's popup boxes
                            </p>
                            <table className="table table-borderless table-centered mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ width: '50%' }}>Alert Type</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>A basic message</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-basic"
                                                onClick={() =>
                                                    swal.fire({
                                                        title: 'Any fool can use a computer!',
                                                        confirmButtonColor: '#3bafda',
                                                    })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A title with a text under</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-title"
                                                onClick={() =>
                                                    swal.fire({
                                                        title: 'The Internet?',
                                                        text: 'That thing is still around?',
                                                        icon: 'question',
                                                        confirmButtonColor: '#3bafda',
                                                    })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A success message!</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-success"
                                                onClick={() =>
                                                    swal.fire({
                                                        title: 'Good job!',
                                                        text: 'You clicked the button!',
                                                        icon: 'success',
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3bafda',
                                                        cancelButtonColor: '#f1556c',
                                                    })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A modal window with a long content inside:</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-long-content"
                                                onClick={() =>
                                                    swal.fire({
                                                        imageUrl: 'https://placeholder.pics/svg/300x1500',
                                                        imageHeight: 1500,
                                                        imageAlt: 'A tall image',
                                                        confirmButtonColor: '#3bafda',
                                                    })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A custom positioned dialog</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-custom-position"
                                                onClick={() =>
                                                    swal.fire({
                                                        position: 'top-end',
                                                        icon: 'success',
                                                        title: 'Your work has been saved',
                                                        showConfirmButton: false,
                                                        timer: 1500,
                                                    })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A modal with a title, an error icon, a text, and a footer</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-error"
                                                onClick={() =>
                                                    swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        text: 'Something went wrong!',
                                                        footer: '<a href>Why do I have this issue?</a>',
                                                        confirmButtonColor: '#3bafda',
                                                    })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A confirm dialog, with a function attached to the "Confirm"-button...</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-warning"
                                                onClick={() =>
                                                    swal
                                                        .fire({
                                                            title: 'Are you sure?',
                                                            text: "You won't be able to revert this!",
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            confirmButtonColor: '#1abc9c',
                                                            cancelButtonColor: '#f1556c',
                                                            confirmButtonText: 'Yes, delete it!',
                                                        })
                                                        .then(function (result: { value: any }) {
                                                            if (result.value) {
                                                                swal.fire(
                                                                    'Deleted!',
                                                                    'Your file has been deleted.',
                                                                    'success',
                                                                    '#1abc9c'
                                                                );
                                                            }
                                                        })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>By passing a parameter, you can execute something else for "Cancel".</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-params"
                                                onClick={() =>
                                                    swal
                                                        .fire({
                                                            title: 'Are you sure?',
                                                            text: "You won't be able to revert this!",
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            confirmButtonText: 'Yes, delete it!',
                                                            cancelButtonText: 'No, cancel!',
                                                            confirmButtonClass: 'btn btn-success mt-2',
                                                            cancelButtonClass: 'btn btn-danger ms-2 mt-2',
                                                            buttonsStyling: false,
                                                        })
                                                        .then(function (result: { value: any; dismiss: any }) {
                                                            if (result.value) {
                                                                swal.fire({
                                                                    title: 'Deleted!',
                                                                    text: 'Your file has been deleted.',
                                                                    icon: 'success',
                                                                    confirmButtonColor: '#1abc9c',
                                                                });
                                                            } else if (
                                                                // Read more about handling dismissals
                                                                result.dismiss === swal.DismissReason.cancel
                                                            ) {
                                                                swal.fire({
                                                                    title: 'Cancelled',
                                                                    text: 'Your imaginary file is safe :)',
                                                                    icon: 'error',
                                                                    confirmButtonColor: '#1abc9c',
                                                                });
                                                            }
                                                        })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A message with custom Image Header</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-image"
                                                onClick={() =>
                                                    swal.fire({
                                                        title: 'Minton',
                                                        text: 'Responsive Bootstrap 5 Admin Dashboard',
                                                        imageUrl: logosm,
                                                        imageHeight: 50,
                                                        confirmButtonColor: '#3bafda',
                                                        animation: false,
                                                    })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A message with auto close timer</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="sa-close"
                                                onClick={() =>
                                                    swal
                                                        .fire({
                                                            title: 'Auto close alert!',
                                                            html: 'I will close in <strong></strong> seconds.',
                                                            timer: 2000,
                                                            confirmButtonColor: '#3bafda',
                                                            onBeforeOpen: function () {
                                                                swal.showLoading();
                                                                timerInterval = setInterval(function () {
                                                                    swal
                                                                        .getContent()
                                                                        .querySelector('strong').textContent =
                                                                        swal.getTimerLeft();
                                                                }, 100);
                                                            },
                                                            onClose: function () {
                                                                clearInterval(timerInterval);
                                                            },
                                                        })
                                                        .then(function (result: { dismiss: any }) {
                                                            if (
                                                                // Read more about handling dismissals
                                                                result.dismiss === swal.DismissReason.timer
                                                            ) {
                                                                console.log('I was closed by the timer');
                                                            }
                                                        })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom HTML description and buttons</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="custom-html-alert"
                                                onClick={() =>
                                                    swal.fire({
                                                        title: '<i>HTML</i> <u>example</u>',
                                                        icon: 'info',
                                                        html:
                                                            'You can use <b>bold text</b>, ' +
                                                            '<a href="//coderthemes.com/">links</a> ' +
                                                            'and other HTML tags',
                                                        showCloseButton: true,
                                                        showCancelButton: true,
                                                        confirmButtonClass: 'btn btn-success mt-2',
                                                        cancelButtonClass: 'btn btn-danger ms-2 mt-2',
                                                        confirmButtonColor: '#1abc9c',
                                                        cancelButtonColor: '#f1556c',
                                                        confirmButtonText:
                                                            '<i class="mdi mdi-thumb-up-outline"></i> Great!',
                                                        cancelButtonText: '<i class="mdi mdi-thumb-down-outline"></i>',
                                                    })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A message with custom width, padding and background</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="custom-padding-width-alert"
                                                onClick={() =>
                                                    swal.fire({
                                                        title: 'Custom width, padding, background.',
                                                        width: 600,
                                                        padding: 100,
                                                        confirmButtonColor: '#3bafda',
                                                        background:
                                                            '#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)',
                                                    })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ajax request example</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="ajax-alert"
                                                onClick={() =>
                                                    swal
                                                        .fire({
                                                            title: 'Submit your Github username',
                                                            input: 'text',
                                                            inputAttributes: {
                                                                autocapitalize: 'off',
                                                            },
                                                            showCancelButton: true,
                                                            confirmButtonText: 'Look up',
                                                            showLoaderOnConfirm: true,
                                                            confirmButtonColor: '#3bafda',
                                                            cancelButtonColor: '#f1556c',
                                                            preConfirm: function (login: string) {
                                                                return fetch('https://api.github.com/users/' + login)
                                                                    .then(function (response) {
                                                                        if (!response.ok) {
                                                                            throw new Error(response.statusText);
                                                                        }
                                                                        return response.json();
                                                                    })
                                                                    .catch(function (error) {
                                                                        swal.showValidationMessage(
                                                                            'Request failed: ' + error
                                                                        );
                                                                    });
                                                            },
                                                            allowOutsideClick: false,
                                                        })
                                                        .then(function (result: {
                                                            value: { login: string; avatar_url: any };
                                                        }) {
                                                            if (result.value) {
                                                                console.log('result.value', result.value);

                                                                swal.fire({
                                                                    title: result.value.login + "'s avatar",
                                                                    imageUrl: result.value.avatar_url,
                                                                    imageHeight: 60,
                                                                    confirmButtonColor: '#1abc9c',
                                                                });
                                                            }
                                                        })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chaining modals (queue) example</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="chaining-alert"
                                                onClick={() =>
                                                    swal
                                                        .mixin({
                                                            input: 'text',
                                                            confirmButtonText: 'Next &rarr;',
                                                            showCancelButton: true,
                                                            confirmButtonColor: '#3bafda',
                                                            cancelButtonColor: '#f1556c',
                                                            progressSteps: ['1', '2', '3'],
                                                        })
                                                        .queue([
                                                            {
                                                                title: 'Question 1',
                                                                text: 'Chaining swal2 modals is easy',
                                                            },
                                                            'Question 2',
                                                            'Question 3',
                                                        ])
                                                        .then(function (result: { value: any }) {
                                                            if (result.value) {
                                                                swal.fire({
                                                                    title: 'All done!',
                                                                    html:
                                                                        'Your answers: <pre><code>' +
                                                                        JSON.stringify(result.value) +
                                                                        '</code></pre>',
                                                                    confirmButtonText: 'Lovely!',
                                                                    confirmButtonColor: '#3bafda',
                                                                });
                                                            }
                                                        })
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Dynamic queue example</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="btn btn-info btn-xs"
                                                id="dynamic-alert"
                                                onClick={() =>
                                                    swal
                                                        .queue([
                                                            {
                                                                title: 'Your public IP',
                                                                confirmButtonColor: '#1abc9c',
                                                                confirmButtonText: 'Show my public IP',
                                                                confirmButtonClass: 'btn btn-primary mt-2',
                                                                text:
                                                                    'Your public IP will be received ' +
                                                                    'via AJAX request',
                                                                showLoaderOnConfirm: true,
                                                                preConfirm: function () {
                                                                    return new Promise<void>(function (resolve) {
                                                                        fetch('https://api.ipify.org?format=json')
                                                                            .then((response) => {
                                                                                return response.json();
                                                                            })
                                                                            .then((data) => {
                                                                                swal.insertQueueStep(data.ip);
                                                                                resolve();
                                                                            });
                                                                    });
                                                                },
                                                            },
                                                        ])
                                                        .catch(swal.noop)
                                                }
                                            >
                                                Click me
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
});

export default SweetAlerts;
