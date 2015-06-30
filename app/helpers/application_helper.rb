module ApplicationHelper
  def date_edit_tag(obj_or_widget, attribute, options={})
    options = options.reverse_merge(date_attributes)

    scrivito_tag(:span, obj_or_widget, attribute, options) do
      format_date(obj_or_widget[attribute])
    end
  end

  def format_date(date)
    date.try(:strftime, '%b %d, %Y')
  end

  def srcset_for(binary)
    return unless binary

    (6..11).map do |exp|
      width = 2 ** exp
      url = scrivito_url(binary.transform(width: width))

      "#{url} #{width}w"
    end.join(", ")
  end

  private

  def date_attributes
    { data: { 'date-format' => 'MM dd, yy', 'time-format' => ' ' } }
  end
end
