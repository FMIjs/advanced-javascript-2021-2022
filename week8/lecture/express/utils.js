const layout = 'layout.ejs';

module.exports = {
  renderWithLayout(res, page, pageTitle, data) {
    return res.render(layout, { page, pageTitle, data });
  }
};